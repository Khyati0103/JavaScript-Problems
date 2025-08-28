//! problems sloving using two pointer approach

//todo 1.Moving zeros to the end of an array
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let arr = [];
// rl.question("Enter the array elements seperated by space:", (elements) => {
//     arr = elements.split(' ').map(Number);
//     // let j = -1;
//     function swap(arr, i, j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     // first loop to find the position of first zero
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 0) {
//             j = i;
//             break;
//         }
//     }
//     for (let i = j + 1; i < arr.length; i++) {
//         if (arr[i] != 0) {
//             swap(arr, i, j);
//             j++;
//         }
//     }
//     console.log("Array after moving zeros to the end is : ", arr);
//     rl.close();
// })

//todo 2.Two sum problem (only for sorted array and this will give only one pair
//todo as output)
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let arr = [];
// rl.question("Enter the array elements seperated by space:", (elements) => {
//     arr = elements.split(' ').map(Number);
//     // sorting the array using built in fuction
//      arr=arr.sort((a,b)=>a-b);
//     // for (i = 0; i < arr.length; i++) {
//     //     for (j = 0; j < arr.length - i - 1; j++) {
//     //         if (arr[i] < arr[j]) {
//     //             let temp = arr[i];
//     //             arr[i] = arr[j];
//     //             arr[j] = temp;
//     //         }
//     //     }
//     // }
//     rl.question("Enter the target sum :", (target) => {
//         target = parseInt(target);
//         let leftPointer = 0;
//         let rightPointer = arr.length - 1;
//         while (leftPointer < rightPointer) {
//             let sum = arr[leftPointer] + arr[rightPointer];
//             if (sum == target) {
//                 console.log("Pair found : ", arr[leftPointer], arr[rightPointer]);
//                 break;
//             }
//             else if (sum < target) {
//                 leftPointer++;
//             }
//             else if (sum > target) {
//                 rightPointer--;
//             }
//             else {
//                 console.log("Pair not found");
//                 break;
//             }
//         }
//         rl.close();
//     });
// });

//todo 2.Two sum problem (only for sorted array and this will give only all pairs
//todo as output)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let arr = [];
rl.question("Enter the array elements seperated by space:", (elements) => {
    arr = elements.split(' ').map(Number);
    arr = arr.sort((a, b) => a - b);

    rl.question("Enter the target sum :", (target) => {
        target = parseInt(target);
        let leftPointer = 0;
        let rightPointer = arr.length - 1;
        let pairs = [];
        while (leftPointer < rightPointer) {
            let sum = arr[leftPointer] + arr[rightPointer];
            if (sum == target) {
                pairs.push([arr[leftPointer], arr[rightPointer]]);
                leftPointer++;
                rightPointer--;
            }
            else if (sum < target) {
                leftPointer++;
            }
            else if (sum > target) {
                rightPointer--;
            }
            else {
                console.log("Pair not found");
                break;
            }
        }
        console.log("All pairs are : ", pairs);
        rl.close();
    });
});