//! Reversing an Array
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
//         let start = 0;
//         let end = arr.length - 1;
//         while (start < end) {
//             let temp = arr[start];
//             arr[start] = arr[end];
//             arr[end] = temp;
//             start++;
//             end--;
//         }
//         console.log("Reversed Array is : ", arr);
//         rl.close();
//     });
// });

// left rotation by d using reverse method'
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the size of array : ", (size) => {
    size = parseInt(size);
    let arr = [];
    rl.question("Enter the array elements separated by space: ", (elements) => {
        arr = elements.split(' ').map(Number);
        rl.question("Enter the number of rotations :", (d) => {
            d = parseInt(d);
            n = arr.length;
            d = d % n;
            let ogarray = arr.slice(); // to store original array
            function Reverse(start, end) {
                while (start < end) {
                    tmp = arr[start];
                    arr[start] = arr[end];
                    arr[end] = tmp;
                    start++;
                    end--;
                }
            }
            console.log("Left Rotation by " + d + "th position : \n");
            // step 1: reverse first d elements
            Reverse(0, d - 1);
            // step 2: reverse remaining n-d elements
            Reverse(d, n - 1);
            // step 3: reverse the whole array
            Reverse(0, n - 1);
            console.log("Array after Left rotation is : ", arr);
            console.log("\n");
            arr = ogarray; // reset to original array
            console.log("Right Rotation by " + d + "th position : \n");
            Reverse(0, d);
            Reverse(n - d, n - 1);
            Reverse(0, n - 1);
            console.log("Array after Right rotation is : ", arr);
            rl.close();
        });
    });
});