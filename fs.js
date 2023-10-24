const { readFileSync, writeFileSync, readFile } = require('fs');

// const text = readFileSync('./text1.txt', 'utf-8');

readFile('./text1.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
        writeFileSync('./text2.txt', res, { flag: 'a' });
    }
})

// writeFileSync('./text2.txt', text, { flag: 'a' });

// console.log(text);


console.log("Task Done");