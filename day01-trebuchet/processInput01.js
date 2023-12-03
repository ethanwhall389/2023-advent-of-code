const { count } = require('console');
const fileSystem = require('fs');
// const fileSystem = require('fs');

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

    const lines = input.split('\n');
    // console.log(lines);

    let counter = 0;
    // console.log('lines: ' + lines.length);
    for (let i = 0; i < lines.length; i++) {
        //split line into characters
        const characters = lines[i].split('');

        const numbers = [];
        characters.forEach( (char) => {
            // console.log(Number(char));
            if (!isNaN(Number(char))) {
                numbers.push(char);
            }
        })
        // console.log(numbers);

        let finalNum
        if (numbers.length > 1) {
            const firstNum = numbers.shift();
            const lastNum = numbers.pop();
            finalNum = Number(firstNum + lastNum);
        } else {
            finalNum = Number(numbers[0] + numbers[0]);
        }


        // console.log(typeof finalNum);
        // console.log(finalNum);

        counter += finalNum;
    }

    // console.log(input);
    console.log(counter);
}

const filePath = process.argv[2];

processDocument(filePath);