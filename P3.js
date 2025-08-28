//! check if the array is sorted or not
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
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 console.log("Array is not sorted");
//                 rl.close();
//                 return;
//             }
//             else {
//                 console.log("Array is sorted");
//                 rl.close();
//                 return;
//             }
//         }

//     });
// });

//! sorting of array
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
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
                if (arr[j] == arr[j + 1]) {
                    arr.splice(j,1); // remove duplicate
                    j--; 
                }
            }
        }

        console.log("Sorted array is : ", arr);
        rl.close();

    });
});