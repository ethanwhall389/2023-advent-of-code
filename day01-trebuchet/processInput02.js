// import wordsToNumbers from 'words-to-numbers';
// import readFile from 'fs';

const { count } = require('console');
const fileSystem = require('fs');
const wordsToNumbers = require('words-to-numbers').default;

// const { count } = require('console');

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


    //split into lines
    //Define the possible words / numbers in an array
    //loop through each line
        //Using a reg expression, extract these words / numbers into its own array.
        //shift first value / pop last value off of array into their own variables
        //Check each num variable and, if necessary convert to number using library, then back to a string.
        //combine nums into single digit
        //convert to number
        //add number to counter


    // console.log(input);
    const lines = input.split('\n');
    
    // console.log('lines:');
    // console.log(lines);

    //Possible number options
    const possibleNums = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', '0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9'
    ]

    let counter = 0;

    for (let i = 0; i < lines.length; i++) {
        //RegEx to check for the possibleNums
        const pattern = new RegExp(possibleNums.join('|'), 'g');
        const extractedWords = lines[i].match(pattern);
        
        // console.log('extracted words:')
        // console.log(extractedWords);

        let firstNum = 0;
        let lastNum = 0;
        let isShort;
        if (extractedWords.length > 1) {    
            isShort = false;       
            firstNum = extractedWords.shift();
            // console.log(firstNum);
            // console.log('extractedWords > 1');
            // console.log(firstNum);
            lastNum = extractedWords.pop();
            // console.log(lastNum);
        } else {
            isShort = true;
            firstNum = extractedWords[0];
        }

        // console.log('first and last num');
        // console.log(firstNum);
        // console.log(lastNum);

        //NOTE: will probably need to implement doubling again
        function convertToNum (num) {
            
        }
        if (isNaN(Number(firstNum))) {
            firstNum = wordsToNumbers(firstNum).toString();
            // console.log(firstNum);
        }

        if (isNaN(Number(lastNum))) {
            lastNum = wordsToNumbers(lastNum).toString();
            // console.log(lastNum);
        }

        let finalNum
        if (isShort) {
            finalNum = Number(firstNum + firstNum);
        } else {
            finalNum = Number(firstNum + lastNum);
            // console.log(finalNum);
        }
        // console.log(finalNum);

        counter = counter + finalNum;
    }

    console.log(counter);


    // // console.log('lines: ' + lines.length);
    // for (let i = 0; i < lines.length; i++) {
    //     //split line into characters
    //     const characters = lines[i].split('');

    //     const numbers = [];
    //     characters.forEach( (char) => {
    //         // console.log(Number(char));
    //         if (!isNaN(Number(char))) {
    //             numbers.push(char);
    //         }
    //     })
    //     // console.log(numbers);

    //     let finalNum
    //     if (numbers.length > 1) {
    //         const firstNum = numbers.shift();
    //         const lastNum = numbers.pop();
    //         finalNum = Number(firstNum + lastNum);
    //     } else {
    //         finalNum = Number(numbers[0] + numbers[0]);
    //     }


    //     // console.log(typeof finalNum);
    //     // console.log(finalNum);

    //     counter += finalNum;
    // }

    // // console.log(input);
    // console.log(counter);
}

const filePath = process.argv[2];

processDocument(filePath);