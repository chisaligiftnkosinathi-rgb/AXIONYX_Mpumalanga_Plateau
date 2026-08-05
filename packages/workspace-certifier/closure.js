const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');
const searchDirs = ['apps', 'packages'];

let registry = {};

// Load all packages into memory
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
                        registry[content.name] = content;
                    }
                } catch (e) {}
            }
        }
    }
}

searchDirs.forEach(dir => loadRegistry(path.join(rootDir, dir)));

let closure = new Set();
let directDependencies = new Set();
let transitiveDependencies = new Set();
let externalDependencies = new Set();

function traverse(pkgName, isDirect = false) {
    if (closure.has(pkgName)) return;
    if (pkgName !== '@axionyx/reference-laboratory') {
        closure.add(pkgName);
        if (isDirect) {
            directDependencies.add(pkgName);
        } else {
            transitiveDependencies.add(pkgName);
        }
    }

    const pkg = registry[pkgName];
    if (!pkg) return;

    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    for (const [dep, version] of Object.entries(deps)) {
        if (dep.startsWith('@axionyx/')) {
            traverse(dep, pkgName === '@axionyx/reference-laboratory');
        } else {
            externalDependencies.add(dep);
        }
    }
}

traverse('@axionyx/reference-laboratory', true);

console.log(`\n--- Reference Laboratory Dependency Closure ---`);
console.log(`\nDirect @axionyx Dependencies (${directDependencies.size}):`);
Array.from(directDependencies).sort().forEach(d => console.log(`  - ${d}`));

console.log(`\nTransitive @axionyx Dependencies (${transitiveDependencies.size}):`);
Array.from(transitiveDependencies).sort().forEach(d => console.log(`  - ${d}`));

console.log(`\nTotal Internal Closure: ${closure.size} packages`);

console.log(`\nExternal Dependencies (Top Level & Transitive) (${externalDependencies.size}):`);
Array.from(externalDependencies).sort().forEach(d => console.log(`  - ${d}`));

// Determine Build Order (Topological Sort)
let buildOrder = [];
let visited = new Set();

function topoSort(node) {
    if (visited.has(node)) return;
    visited.add(node);
    const pkg = registry[node];
    if (pkg) {
        const deps = { ...pkg.dependencies, ...pkg.devDependencies };
        for (const dep of Object.keys(deps)) {
            if (closure.has(dep)) {
                topoSort(dep);
            }
        }
    }
    if (node !== '@axionyx/reference-laboratory') {
        buildOrder.push(node);
    }
}
topoSort('@axionyx/reference-laboratory');

console.log(`\nBuild Order:`);
buildOrder.forEach((node, i) => console.log(`  ${i + 1}. ${node}`));
