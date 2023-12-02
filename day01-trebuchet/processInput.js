const fileSystem = require('fs');

function processDocument(filePath) {
    fileSystem.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading the file: ${err.message}`);
            return;
        } else {
            analyzeInput(data);
        }
    })
}

function analyzeInput(input) {
    // Analyze each line, return the numbers, add the numbers.
    const lines = input.split('\n');
    console.log(lines);
}

const filePath = process.argv[2];

processDocument(filePath);