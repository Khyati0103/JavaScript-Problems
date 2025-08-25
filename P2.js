//!Max number in array
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the size of array : ", (size) => {
//     size = parseInt(size);
//     let arr = [];
//     let i = 0;

//     rl.question("Enter the array elements separated by space: ", (elements) => {
//         arr = elements.split(' ').map(Number);
//         let max = arr[0];
//         for (let j = 1; j < arr.length; j++) {
//             if (arr[j] > max) {
//                 max = arr[j];
//             }
//         }
//         console.log("Max number in array is : ", max);
//         rl.close();
//     });
// });

// //! second largest number in array
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the size of array : ", (size) => {
    size = parseInt(size);
    let arr = [];

    rl.question("Enter the array elements separated by space: ", (elements) => {
        arr = elements.split(' ').map(Number);
        let Max = -Infinity;        // Initialize Max to the smallest possible value
        let secondmax = -Infinity; // Initialize secondmax to the smallest possible value
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > Max) {
                secondmax = Max;
                Max = arr[i];
            }
            else if (arr[i] > secondmax && arr[i] != Max) {
                secondmax = arr[i];
            }

        }
        console.log("Second Max number in array is : ", secondmax);
        rl.close();
    })
});
