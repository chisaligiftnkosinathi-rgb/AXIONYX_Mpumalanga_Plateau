const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');
const searchDirs = ['apps', 'packages'];

let repairedCount = 0;

function repairMissingPackageJson(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'dist' && !entry.name.startsWith('.')) {
            const packagePath = path.join(dir, entry.name);
            const packageJsonPath = path.join(packagePath, 'package.json');
            
            if (!fs.existsSync(packageJsonPath)) {
                // Generate missing package.json
                const isApp = dir.endsWith('apps');
                const pkgName = isApp ? `@axionyx/${entry.name}` : `@axionyx/${entry.name}`;
                const pkgContent = {
                    name: pkgName,
                    version: "1.0.0",
                    description: `Auto-generated stub for ${entry.name}`,
                    main: "src/index.ts"
                };
                fs.writeFileSync(packageJsonPath, JSON.stringify(pkgContent, null, 2));
                console.log(`[REPAIR] Created missing package.json for ${entry.name}`);
                repairedCount++;
            }
        }
    }
}

searchDirs.forEach(dir => repairMissingPackageJson(path.join(rootDir, dir)));

// Repair operational-pilot dependency
const opPilotPath = path.join(rootDir, 'packages', 'operational-pilot', 'package.json');
if (fs.existsSync(opPilotPath)) {
    const content = JSON.parse(fs.readFileSync(opPilotPath, 'utf8'));
    if (content.dependencies && content.dependencies['@axionyx/observability'] === '*') {
        content.dependencies['@axionyx/observability'] = 'workspace:*';
        fs.writeFileSync(opPilotPath, JSON.stringify(content, null, 2));
        console.log(`[REPAIR] Fixed dependency linkage in operational-pilot`);
        repairedCount++;
    }
}

console.log(`\n✅ Systematic repair complete! Applied ${repairedCount} fixes.`);
