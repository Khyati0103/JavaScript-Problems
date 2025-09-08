//? 1 2 3 4
//?  1 2 3 4
//?  1 2 3 4
//?  1 2 3 4

const { count } = require('console');
const { stringify } = require('querystring');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= num; j++) {
//             rows += j + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });


//? * * *
//? * * *
//? * * *

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= num; j++) {
//             rows += "*" + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });


//? 1 1 1 1
//? 2 2 2
//? 3 3
//?4

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = num; j >= i; j--) {
//             rows += i + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? 4 3 2 1
//? 4 3 2 1
//? 4 3 2 1
//? 4 3 2 1

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = num; j >= 1; j--) {
//             rows += j + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? 1 2 3 4
//?  5 6 7 8
//?  9 10 11 12
//?  13 14 15 16

// rl.question("Enter the number of rows: ", (num) => {
//     num = Number(num);
//     let count = 1;
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= num; j++) {
//             rows += count + " ";
//             count++;
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? *
//? * *
//? * * *
//? * * * *

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= i; j++) {
//             rows += "*" + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? 1
//? 2 2
//? 3 3 3
//? 4 4 4 4

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= i; j++) {
//             rows += i + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? 1
//? 2 3
//? 4 5 6
//? 7 8 9 10

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     let count = 1;
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= i; j++) {
//             rows += count + " ";
//             count++;
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? 1
//? 2 1
//? 3 2 1
//? 4 3 2 1

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = i; j >= 1; j--) {
//             rows += j + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? A A A
//? B B B
//? C C C


// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= num; j++) {
//             rows += String.fromCharCode(64 + i) + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? A B C
//? A B C
//? A B C


// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= num; j++) {
//             rows += String.fromCharCode(64 + j) + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? A B C
//? D E F
//? G H I


// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= num; j++) {
//             rows += String.fromCharCode(65 + count) + " ";
//             count++;
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

// //? 1 2 3
// //? 2 3 4
// //? 3 4 5


// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= num; j++) {
//             rows += ((j + i) - 1) + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? A B C
//? B C D
//? C D E


// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= num; j++) {
//             let n = ((j + i) - 1);
//             rows += String.fromCharCode(64 + n) + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? A
//? B B
//? C C C


// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= i; j++) {
//             rows += String.fromCharCode(64 + i) + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? A
//? B C
//? D E F
//? G H I J

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     let count = 1;
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= i; j++) {
//             rows += String.fromCharCode(64 + count) + " ";
//             count++;
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? A
//? B C
//? C D E
//? D E F G

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= i; j++) {
//             let b = ((i + j) - 1);
//             rows += String.fromCharCode(64 + b) + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });


//? 1
//? 2 3
//? 3 4 5
//? 4 5 6 7

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     let count = 1;
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = 1; j <= i; j++) {
//             rows += ((j + i) - 1) + " ";
//             count++;
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });

//? D
//? C D
//? B C D
//? A B C D

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         for (let j = num - i + 1; j <= num; j++) {
//             rows += String.fromCharCode(64 + j) + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });


//?      *
//?    * *
//?  * * *
//? * * * *

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = 1; i <= num; i++) {
//         let rows = "";
//         let space = " ".repeat(num - i);
//         for (let j = 1; j <= i; j++) {
//             rows += "*";
//         }
//         console.log(space + rows.trim());
//     }
//     rl.close();
// });


//? * * * *
//? * * *
//? * *
//? *

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = num; i >= 1; i--) {
//         let rows = "";
//         for (let j = 1; j <= i; j++) {
//             rows += "*" + " ";
//         }
//         console.log(rows.trim());
//     }
//     rl.close();
// });


//? * * * *
//?  * * *
//?    * *
//?      *

// rl.question("Enter the number of rows: ", (num) => {
//     num = parseInt(num);
//     for (let i = num; i >= 1; i--) {
//         let rows = "";
//         let space = " ".repeat(num - i);
//         for (let j = 1; j <= i; j++) {
//             rows += "*";
//         }
//         console.log(space + rows.trim());
//     }
//     rl.close();
// });

//? 1 1 1 1
//?   2 2 2
//?     3 3
//?       4

rl.question("Enter the number of rows: ", (num) => {
    num = parseInt(num);
    for (let i = 1; i <= num; i++) {
        let rows = "";
        let space = " ".repeat(i - 1);
        for (let j = num - i + 1; j >= 1; j--) {
            rows += i ;
        }
        console.log(space + rows.trim());
    }
    rl.close();
});


//?       1
//?     2 2
//?   3 3 3
//? 4 4 4 4

//? 1 2 3 4
//?   2 3 4
//?     3 4
//?       4

//?       1
//?     2 3
//?   4 5 6
//? 7 8 9 10

//?       A
//?     B C
//?   D E F
//? G H I J


//?    1
//?   121
//?  12321
//? 1234321
