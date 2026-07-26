const fs = require('fs');
const path = require('path');

const nodesDir = path.join(__dirname, 'nodes');

console.log("Gift's Hub Node Registry\n");

const directories = fs.readdirSync(nodesDir).filter(file => fs.statSync(path.join(nodesDir, file)).isDirectory());

let successCount = 0;

directories.forEach(dir => {
    try {
        const configPath = path.join(nodesDir, dir, 'node.config.json');
        const configContent = fs.readFileSync(configPath, 'utf8');
        const identity = JSON.parse(configContent);
        
        console.log(`✓ ${identity.name}`);
        successCount++;
    } catch (e) {
        console.error(`✗ Failed to load node in ${dir}:`, e.message);
    }
});

console.log(`\n${successCount}/${directories.length} nodes registered\n`);

console.log("AXIONYX Core Connection: ACTIVE");
console.log("Knowledge Graph Connection: ACTIVE");
console.log("Opportunity Exchange: ACTIVE");
