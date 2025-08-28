//! rotate one left of elements of array
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the size of array : ", (size) => {
//     size = parseInt(size);
//     let arr = [];

//     rl.question("Enter the array elements separated by space: ", (elements) => {
//         arr = elements.split(' ').map(Number);
//         let first = arr[0];
//         for (let i = 1; i < arr.length; i++) {
//             arr[i - 1] = arr[i];
//         }
//         arr[arr.length - 1] = first;
//         console.log("Array after rotation is : ", arr);
//         rl.close();
//     });
// });

//! left rotate by d
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter the size of array : ", (size) => {
//     size = parseInt(size);
//     let arr = [];
//     rl.question("Enter the array elements separated by space: ", (elements) => {
//         arr = elements.split(' ').map(Number);
//         rl.question("Enter the number of rotations : ", (d) => {
//             d = parseInt(d);
//             d = d % size;
//             let n = arr.length;
//             let temp = [];
//             for (let i = 0; i < d; i++) {
//                 temp.push(arr[i]);
//             }
//             for (let i = d; i < arr.length; i++) {
//                 arr[i - d] = arr[i];
//             }
//             for (let i = n - d; i < arr.length; i++) {
//                 arr[i] = temp[i - (n - d)];
//             }
//             console.log("Array after rotation is : ", arr);
//             rl.close();
//         });
//     });
// });

//! right rotation by 1
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the size of array : ", (size) => {
//     size = parseInt(size);
//     let arr = [];
//     rl.question("Enter the array elements separated by space: ", (elements) => {
//         arr = elements.split(' ').map(Number);
//         last = arr[arr.length - 1];
//         for (let i = arr.length - 1; i > 0; i--) {
//             arr[i] = arr[i - 1];
//         }
//         arr[0] = last;
//         console.log("Array after rotation is : ", arr);
//         rl.close();
//     });
// });

//! right rotate by d
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
        let temp = [];
        rl.question("Enter the number of rotations:", (d) => {
            let n = arr.length;
            d = d % n;
            for (let i = n - d; i < n; i++) {
                temp.push(arr[i]);
            }
            for (i = n - 1; i >= d; i--) {
                arr[i] = arr[i - d];
            }
            for (let i = 0; i < d; i++) {
                arr[i] = temp[i];
            }
            console.log("Array after rotation is : ", arr);
            rl.close();
        })
    })
});