import { Article } from '../schemas/article.schema';
import { EvidenceLinker } from '../verification/evidence-linker';

export class ArticleGenerator {
  static toMarkdown(article: Article): string {
    let md = \`---\\ntitle: "\${article.title}"\\ndate: "\${article.publishDate}"\\ntype: "\${article.type}"\\n---\\n\\n# \${article.title}\\n\\n\`;
    
    for (const section of article.sections) {
      md += \`## \${section.heading}\\n\\n\${section.content}\\n\\n\`;
    }

    if (article.evidenceCitations.length > 0) {
      md += \`---\\n### Verifiable Evidence\\n\\n\`;
      for (const citation of article.evidenceCitations) {
        md += \`- \${EvidenceLinker.generateCitation(citation, "Reality Artifact Cryptographically Traced")}\\n\`;
      }
    }

    return md;
  }
}
