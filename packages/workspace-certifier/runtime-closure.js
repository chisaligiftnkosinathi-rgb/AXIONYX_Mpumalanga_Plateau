const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');
const searchDirs = ['apps', 'packages'];

let registry = {};

// Load all packages into memory to know their paths
function loadRegistry(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'dist' && !entry.name.startsWith('.')) {
            const packageJsonPath = path.join(dir, entry.name, 'package.json');
            if (fs.existsSync(packageJsonPath)) {
                try {
                    const content = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                    if (content.name) {
                        registry[content.name] = { 
                            name: content.name,
                            dir: path.join(dir, entry.name),
                            packageJsonPath
                        };
                    }
                } catch (e) {}
            }
        }
    }
}

searchDirs.forEach(dir => loadRegistry(path.join(rootDir, dir)));

let runtimeClosure = new Set();
let directImports = new Set();
let transitiveImports = new Set();

function extractImports(filePath, currentPkgName) {
    if (!fs.existsSync(filePath)) return;
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
        const entries = fs.readdirSync(filePath, { withFileTypes: true });
        for (const entry of entries) {
            if (entry.name !== 'node_modules' && entry.name !== 'dist' && !entry.name.startsWith('.')) {
                extractImports(path.join(filePath, entry.name), currentPkgName);
            }
        }
    } else if (filePath.endsWith('.ts') || filePath.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf8');
        // Regex to match: import ... from '@axionyx/...' or require('@axionyx/...')
        const importRegex = /(?:import|require)[^'"]+['"](@axionyx\/[^'"]+)['"]/g;
        let match;
        while ((match = importRegex.exec(content)) !== null) {
            let importedPkg = match[1];
            // Handle sub-path exports like @axionyx/event-bus/utils by truncating to the package name
            const parts = importedPkg.split('/');
            if (parts.length > 2) {
                importedPkg = parts[0] + '/' + parts[1];
            }
            
            if (importedPkg !== currentPkgName) {
                if (currentPkgName === '@axionyx/reference-laboratory') {
                    directImports.add(importedPkg);
                } else {
                    transitiveImports.add(importedPkg);
                }
                traverseRuntime(importedPkg);
            }
        }
    }
}

function traverseRuntime(pkgName) {
    if (runtimeClosure.has(pkgName)) return;
    runtimeClosure.add(pkgName);

    const pkg = registry[pkgName];
    if (!pkg) {
        console.warn(`[WARN] Imported package ${pkgName} not found in workspace registry!`);
        return;
    }
    
    const srcDir = path.join(pkg.dir, 'src');
    if (fs.existsSync(srcDir)) {
        extractImports(srcDir, pkgName);
    } else {
        // Fallback to searching the whole package dir
        extractImports(pkg.dir, pkgName);
    }
}

// Start with the Reference Laboratory
const labPkg = registry['@axionyx/reference-laboratory'] || registry['@axionyx/app-axionyx-reference-laboratory'] || Object.values(registry).find(p => p.dir.endsWith('axionyx-reference-laboratory'));

if (!labPkg) {
    console.error("Could not find reference-laboratory package in registry!");
    process.exit(1);
}

traverseRuntime(labPkg.name);

console.log(`\n--- Reference Laboratory RUNTIME Import Closure ---`);
console.log(`\nDirect @axionyx Imports (${directImports.size}):`);
Array.from(directImports).sort().forEach(d => console.log(`  - ${d}`));

console.log(`\nTransitive @axionyx Imports (${transitiveImports.size}):`);
Array.from(transitiveImports).sort().forEach(d => console.log(`  - ${d}`));

console.log(`\nTotal Runtime Internal Closure: ${runtimeClosure.size} packages`);

// Compare with Declared
console.log(`\n(Please compare this manually against the package.json dependency closure)`);
