//! Moving zeros to the end of an array 
//?Here we are using an different array to store non zero numbers so it space
//?complexity is O(n) and time complexity is also O(n)

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let arr = [];
rl.question("Enter the array elements seperated by space:", (elements) => {
    arr = elements.split(' ').map(Number);
    let tmp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            tmp.push(arr[i]);
        }
    }
    n1 = tmp.length;
    for (let i = 0; i < n1; i++) {
        arr[i] = tmp[i];
    }
    for (i = n1; i < arr.length; i++) {
        arr[i]=0;
    }
    console.log("Array after moving zeros to the end is : ", arr);
    rl.close();
});

