//*Green comment
//? Blue Comment
//TODO  orange comment
//! Red comment
// This is a regular comment

//! Practical 1 (Reverse a string)
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout   
// });

// rl.question("Enter thestring to reverse : ", (str) => {
//     let reversesrting = str.split('').reverse().join('');
//     console.log("Reversed string is : ", reversesrting);
//     rl.close();
// })

//! Practical 2 (Reverse a Palindrome)
// const readline = require('readline');
// const rl2 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl2.question("Enter the string to check palindrome : ", (str) => {
//     let normalizedString = str.toLowerCase();
//     let reversedString = normalizedString.split('').reverse().join('');
//     if (normalizedString === reversedString) {
//         console.log("The string is a palindrome");
//     } else {
//         console.log("The string is not a palindrome");
//     }
//     rl2.close();
// })

//! Practical 3 (Reverse a number)
// const readline = require('readline');
// const rl3 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl3.question("Enter the number to reverse : ", (num) => {
//     let reversedNumber = 0;
//     while (num > 0) {
//         let digit = num % 10;
//         reversedNumber = reversedNumber * 10 + digit;
//         num = Math.floor(num / 10);
//     }

//     // let reversedNumber = num.toString().split('').reverse().join('');
//     console.log("Reversed number is : ", reversedNumber);
//     rl3.close();
// });

//! Practical 4 (number palindrome)
const readline = require('readline');
const rl4 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl4.question("Enter the number to check palindrome : ", (num) => {
    let ognum = num;
    let reversedNumber = 0;
    while (num > 0) {
        let degit = num % 10;
        reversedNumber = reversedNumber * 10 + degit;
        num = Math.floor(num / 10);
    }
    if (ognum == reversedNumber) {
        console.log("The number is a palindrome");
    }
    else {
        console.log("The number is not a palindrome");
    }
    rl4.close();
})

