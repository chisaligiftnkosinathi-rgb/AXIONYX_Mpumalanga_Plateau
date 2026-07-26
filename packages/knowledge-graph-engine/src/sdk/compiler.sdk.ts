import { DocumentSource, ParsedBlock, SemanticEntity, MappedNode, MappedEdge, UniversalTranslationPipeline } from '../pipeline/index';
import { KnowledgeGraph } from '../schemas/engine.schema';

export interface DocumentParser {
  canParse(source: DocumentSource): boolean;
  parse(source: DocumentSource): ParsedBlock[];
}

export interface EntityExtractor {
  extract(blocks: ParsedBlock[]): SemanticEntity[];
}

export interface OntologyMapper {
  map(entities: SemanticEntity[], source: DocumentSource): { nodes: MappedNode[], edges: MappedEdge[] };
}

export class PolicyCompilerSDK {
  private parsers: DocumentParser[] = [];
  private extractors: EntityExtractor[] = [];
  private mappers: OntologyMapper[] = [];
  
  // Re-use the pipeline engine for the final graph assembly
  private corePipeline = new UniversalTranslationPipeline();

  registerParser(parser: DocumentParser): void {
    this.parsers.push(parser);
  }

  registerExtractor(extractor: EntityExtractor): void {
    this.extractors.push(extractor);
  }

  registerMapper(mapper: OntologyMapper): void {
    this.mappers.push(mapper);
  }

  compileDocument(source: DocumentSource): KnowledgeGraph {
    // 1. Find suitable parser
    const parser = this.parsers.find(p => p.canParse(source));
    if (!parser) {
      throw new Error(`No registered parser can handle document: ${source.id}`);
    }

    // 2. Parse blocks
    const blocks = parser.parse(source);

    // 3. Extract entities (chaining extractors if needed, simplified here to use the first)
    if (this.extractors.length === 0) throw new Error('No entity extractors registered');
    const entities = this.extractors[0].extract(blocks);

    // 4. Map to ontology
    if (this.mappers.length === 0) throw new Error('No ontology mappers registered');
    const { nodes, edges } = this.mappers[0].map(entities, source);

    // 5. Build final graph
    return this.corePipeline.compile(nodes, edges, source);
  }
}
