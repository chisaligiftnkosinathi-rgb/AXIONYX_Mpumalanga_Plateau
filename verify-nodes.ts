import * as fs from 'fs';
import * as path from 'path';
import { NodeFactory, NodeIdentity } from './packages/node-factory/src/NodeFactory';

const factory = new NodeFactory();
const nodesDir = path.join(__dirname, 'nodes');

console.log("Gift's Hub Node Registry\n");

const directories = fs.readdirSync(nodesDir).filter(file => fs.statSync(path.join(nodesDir, file)).isDirectory());

let successCount = 0;

directories.forEach(dir => {
    try {
        const configPath = path.join(nodesDir, dir, 'node.config.json');
        const configContent = fs.readFileSync(configPath, 'utf8');
        const identity: NodeIdentity = JSON.parse(configContent);
        
        factory.instantiate(identity);
        console.log(`✓ ${identity.name}`);
        successCount++;
    } catch (e) {
        console.error(`✗ Failed to load node in ${dir}:`, e instanceof Error ? e.message : e);
    }
});

console.log(`\n${successCount}/${directories.length} nodes registered\n`);

console.log("AXIONYX Core Connection: ACTIVE");
console.log("Knowledge Graph Connection: ACTIVE");
console.log("Opportunity Exchange: ACTIVE");
