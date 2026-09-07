const fs = require('fs');

const requiredFiles = [
    'index.html',
    'script.js',
    'style.css',
    'package.json'
];

console.log('Starting application build validation...');

for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
        console.error(`Build Failed: ${file} not found`);
        process.exit(1);
    }
}

console.log('Application files validated successfully.');
console.log('Build completed successfully.');
