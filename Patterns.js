//? Level 1: Basic Star & Number Patterns

//! Right-angled triangle of stars

// *
// **
// ***
// ****

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += "* ";
//         }
//todo       console.log(row.trim());  trim() removes the extra space of this row += "* ";
//     } 
//     rl.close();
// })


//! Reverse right-angled triangle

// ****
// ***
// **
// *

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     for (let i = n; i > 0; i--) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += "* ";
//         }
//         console.log(row);
//     }
//     rl.close();
// });

//! Square of stars

// ****
// ****
// ****
// ****

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= n; j++) {
//             row += "* ";
//         }
//         console.log(row);

//     }
//     rl.close();
// });


//! Number triangle

// 1
// 12
// 123
// 1234

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     for (i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += j;
//         }
//         console.log(row);
//     }
//     rl.close();
// });


//! Pyramid of stars

//    *      space =n-i
//   ***
//  *****
// *******


// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = ""; 
//         let space = " ".repeat(n-i);
//         for (let j = 1; j <= 2 * i - 1; j++) {
//             row += "*";
//         }
//         console.log(space+row);
//     }
//     rl.close();
// });

//? Level 2: Intermediate Number & Letter Patterns

//! Number pyramid

//    1
//   121
//  12321
// 1234321

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     for (i = 1; i <= n; i++) {
//         let row = "";
//         let space = " ".repeat(n - i);
//         for (let j = 1; j <= i; j++) {
//             row += j;
//         }
//         for (let j = i - 1; j >= 1; j--) {
//             row += j;

//         }
//         console.log(space + row);
//     }
//     rl.close();
// });

//! Right-angled triangle with row numbers

// 1
// 2 2
// 3 3 3
// 4 4 4 4

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += i ;
//         }
//         console.log(row);
//     }
//     rl.close();
// });



//! Alphabet triangle  (just use ASCII code for a = 97 instead of A = 65.)

// A
// AB
// ABC
// ABCD

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 0; j < i; j++) {
//             row += String.fromCharCode(65 + j);
//         }
//         console.log(row);
//     }
//     rl.close();
// });

// A
// BC
// DEF
// GHIJ

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter the n : ", (n) => {
//     let charCode = 65;
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 0; j < i; j++) {
//             row += String.fromCharCode(charCode);
//             charCode++;
//         }
//         console.log(row);
//     }
//     rl.close();
// });





//! Inverted number pyramid

// 12345
// 1234
// 123
// 12
// 1

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     for (let i = n; i >=1 ; i--) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += j;
//         }
//         console.log(row);
//     }
//     rl.close();
// });


//! Hollow square of stars

// ****
// *  *
// *  *
// ****

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= n; j++) {
//             if (i == 1 || i == n || j == 1 || j == n) {
//                 row += "*";
//             }
//             else {
//                 row += " ";
//             }
//         }
//         console.log(row);
//     }
//     rl.close();
// });

//? Level 3: Advanced Patterns

//! Diamond of stars

//    *    here n=4
//   ***
//  *****
// *******
//  *****
//   ***
//    *


// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     //First half
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         let space = " ".repeat(n - i);
//         for (let j = 1; j <= 2 * i - 1; j++) {
//             row += "*";
//         }
//         console.log(space + row);
//     }
//// Second Half
//     for (let i = n - 1; i >= 1; i--) {
//         let row = "";
//         let space = " ".repeat(n - i);
//         for (let j = 1; j <= 2 * i - 1; j++) {
//             row += "*";
//         }
//         console.log(space + row);
//     }
//     rl.close();

// });

//! Floyd’s triangle (numbers in sequence)

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     let num = 1;
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += num + " ";
//             num++;
//         }
//         console.log(row);
//     }
//     rl.close();
// });



//! Zigzag number pattern

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     let num = 1;
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += num + " ";
//             num++;
//         }
//         console.log(row);
//     }
//     rl.close();
// });

//! Pascal’s triangle  (nCr) = n/1 * n-1/2 * n-2/3 ..... * n-r+1/r
//    1
//   1 1
//  1 2 1
// 1 3 3 1

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// rl.question("Enter the n : ", (n) => {
//     function nCr(n, r) {
//         let res = 1;
//         for (let i = 0; i < r; i++) {
//             res = res * (n - i) / (i + 1);
//         }
//         return res;
//     }

//     for (let i = 0; i < n; i++) {
//         let row = " ".repeat(n - i);
//         for (let j = 0; j <= i; j++) {
//             row += nCr(i, j) + " "
//         }
//         console.log(row);
//     }
//     rl.close();
// });


//! Number square with decreasing layers

// 5 5 5 5 5
// 5 4 4 4 5
// 5 4 3 4 5
// 5 4 4 4 5
// 5 5 5 5 5

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the n : ", (n) => {
//     n = parseInt(n);
//     for (let i = 0; i < n; i++) {
//         let row = "";
//         for (let j = 0; j < n; j++) {
//             let min = Math.min(i, j, n - 1 - i, n - 1 - j);
//             row += (n - min) + " ";
//         }
//         console.log(row);
//     }
//     rl.close();
// });
