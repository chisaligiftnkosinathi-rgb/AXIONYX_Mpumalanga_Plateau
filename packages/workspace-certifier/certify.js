const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');
const searchDirs = ['apps', 'packages'];

let allPackages = [];
let registry = {};
let missingNames = [];
let duplicates = [];
let missingVersions = [];
let missingPackageJson = [];
let errors = [];

function findPackageJsonFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'dist' && !entry.name.startsWith('.')) {
            const packagePath = path.join(dir, entry.name);
            const packageJsonPath = path.join(packagePath, 'package.json');
            const relativePath = path.relative(rootDir, packagePath);
            
            if (fs.existsSync(packageJsonPath)) {
                try {
                    const content = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                    allPackages.push({ path: packageJsonPath, content, relativePath });
                } catch (e) {
                    errors.push(`[${relativePath}] Failed to parse package.json: ${e.message}`);
                }
            } else {
                missingPackageJson.push(relativePath);
            }
        }
    }
}

searchDirs.forEach(dir => findPackageJsonFiles(path.join(rootDir, dir)));

// Pass 1: Build registry
allPackages.forEach(pkg => {
    const name = pkg.content.name;
    if (!name) {
        missingNames.push(pkg.relativePath);
    } else {
        if (registry[name]) {
            duplicates.push(name);
        } else {
            registry[name] = pkg;
        }
    }
    
    if (!pkg.content.version) {
        missingVersions.push(pkg.relativePath);
    }
});

// Pass 2: Check dependencies
allPackages.forEach(pkg => {
    const deps = { ...pkg.content.dependencies, ...pkg.content.devDependencies, ...pkg.content.peerDependencies };
    for (const [dep, version] of Object.entries(deps)) {
        if (dep.startsWith('@axionyx/')) {
            if (!registry[dep]) {
                errors.push(`[${pkg.relativePath}] depends on missing package: ${dep}`);
            } else if (version === '*') {
                errors.push(`[${pkg.relativePath}] depends on ${dep} using '*'. Expected 'workspace:*'`);
            } else if (version !== 'workspace:*' && !version.startsWith('workspace:')) {
                // If it's not a workspace prefix, check if it explicitly matches the target version
                if (registry[dep] && version !== registry[dep].content.version) {
                     errors.push(`[${pkg.relativePath}] depends on ${dep} with invalid version '${version}'. Expected 'workspace:*' or '${registry[dep].content.version}'`);
                }
            }
        }
    }
});

console.log(`\n--- AXIONYX Workspace Integrity Report ---`);
console.log(`Total packages scanned: ${allPackages.length}`);
let passed = true;

if (missingPackageJson.length > 0) {
    passed = false;
    console.log(`\n❌ Directories missing package.json:`);
    missingPackageJson.forEach(p => console.log(`   - ${p}`));
}

if (missingNames.length > 0) {
    passed = false;
    console.log(`\n❌ Packages missing "name":`);
    missingNames.forEach(p => console.log(`   - ${p}`));
}

if (duplicates.length > 0) {
    passed = false;
    console.log(`\n❌ Duplicate package names:`);
    duplicates.forEach(p => console.log(`   - ${p}`));
}

if (missingVersions.length > 0) {
    passed = false;
    console.log(`\n❌ Packages missing "version":`);
    missingVersions.forEach(p => console.log(`   - ${p}`));
}

if (errors.length > 0) {
    passed = false;
    console.log(`\n❌ Dependency linkage errors:`);
    errors.forEach(e => console.log(`   - ${e}`));
}

if (passed) {
    console.log(`\n✅ Workspace is healthy! All dependencies resolve correctly.`);
    process.exit(0);
} else {
    console.log(`\n⚠️ Workspace certification FAILED.`);
    process.exit(1);
}
