//! 1. Basics – Numbers & Math

//todo Print numbers from 1 to 100.

//todo Print only even or odd numbers from 1 to N.

//todo Find the sum of first N natural numbers.

//todo Find the factorial of a number.

//todo Check if a number is prime.

//todo Print all prime numbers between 1 to N.

//todo Find the greatest common divisor (GCD) of two numbers.

//todo Find the least common multiple (LCM) of two numbers.

//! 1.
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

//! 2
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter a number: ", (n) => {
//     console.log(`Even numbers from 1 to ${n}:`);
//     for (let i = 2; i <= n; i += 2) {
//         console.log(i);
//         //another method if for(i=2;i<n;i++) {if(i%2==0) console.log(i)}
//     }
//     console.log(`odd numbers from 1 to ${n}:`);
//     for (let i = 1; i <= n; i += 2) {
//         console.log(i);
//     }
//     rl.close();
// });

//! 3 Find the sum of first N natural numbers.
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter a number:", (n) => {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     console.log(`Sum of first ${n} natural numbers is ${sum}`);
//     rl.close();
// });

//!  Find the factorial of a number.
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter a number:", (n) => {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }
//     console.log(`Factorial of ${n} is ${fact}`);
//     rl.close();
// });

//! Check if a number is prime.
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let isprime = true;
// rl.question("Enter a number:", (n) => {
//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             isprime = false;
//             break;
//         }
//         if (isprime == true) {
//             console.log(`${n} is a prime number`);
//         }
//         else {
//             console.log(`${n} is not a prime number`);
//         }
//     }
//     rl.close();
// });

//! Print all prime numbers between 1 to N.
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter a number:", (n) => {
//     for (let i = 2; i <= n; i++) {
//         let isprime = true;
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j == 0) {
//                 isprime = false;
//                 break;
//             }
//         }
//         if (isprime == true) {
//             console.log(i);
//         }
//     }
//     rl.close();
// });

//! print prime number between range x to y
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter two numbers (x and y) separated by space:", (input) => {
//     let [x, y] = input.split(' ').map(Number);
//     if (x === 1) x = 2; // 1 is not a prime number so start from 2
//     for (let i = x; i <= y; i++) {
//         let isprime = true;
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 isprime = false;
//                 break;
//             }
//         }
//         if (isprime === true) {
//             console.log(i);
//         }
//     }
//     rl.close();
// });

//! Find the greatest common divisor (GCD) of two numbers.
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the two number separated by space:", (input) => {
//     let [x, y] = input.split(' ').map(Number);
//     let tmp, gcd = 1;
//     if (x > y) {
//         tmp = x;
//         x = y;
//         y = tmp;
//     }
//     for (let i = 1; i <= y; i++) {
//         if (x % i == 0 && y % i == 0) {
//             gcd = i;
//         }
//     }
//     console.log(`Gcd of ${x} and ${y} is ${x}`);
//     rl.close();
// });

//! Find the least common multiple (LCM) of two numbers.
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter the two numbers separated by space : ", (input) => {
//     let [x, y] = input.split(' ').map(Number);
//     let lcm = 1;
//     for (let i = 1; i < x * y; i++) {
//         if (i%x == 0 && i%y == 0) {
//             lcm = i;
//             break;
//         }
//     }
//     console.log(`Lcm of ${x} and ${y} is ${lcm}.`);
//     rl.close();
// })

//!  Arrays

//todo Find the largest and smallest number in an array.

//todo Reverse an array without using built-in methods.

//todo Find the sum of all elements in an array.

//todo Count the number of even and odd numbers in an array.

//todo Find duplicate elements in an array.

//todo Remove duplicates from an array.

//todo Merge two arrays and sort them.


//!  Find the largest and smallest number in an array.'
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let arr = [];
// rl.question("Enter array separated by space :", (elements) => {
//     arr = elements.split(' ').map(Number);
//     let max = -1;
//     let min = Infinity;
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     console.log(`largest and smallest number of the array is ${max} and ${min}`);
//     rl.close();

// })

//!  Reverse an array without using built-in methods.

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// // let arr = [];
// rl.question("Enter array separated by space :", (elements) => {
//     arr = elements.split(' ').map(Number);
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         tmp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = tmp;
//         start++;
//         end--;
//     }
//     console.log(arr);
//     rl.close();
// });

//! Find the sum of all elements in an array.

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let arr=[];
// rl.question("Enter array separated by space: ",(elements)=>{
//     arr=elements.split(' ').map(Number);
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     console.log("Sum of all elements of array is: ",sum);
//     rl.close();
// })

//! Count the number of even and odd numbers in an array.

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let arr = [];
// rl.question("Enter array separated by space: ", (elements) => {
//     arr = elements.split(' ').map(Number);
//     let evencount=0;
//     let oddcount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             evencount++;
//         }
//         else {
//             oddcount++;
//         }
//     }
//     console.log(`count of even elements and odd elements in the array is ${evencount} and ${oddcount}.`);
//     rl.close();
// });

//! Find duplicate elements in an array. (Using Two pointer algorithm)

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let arr = [];
// rl.question("Enter array separated by space: ", (elements) => {
//     arr = elements.split(' ').map(Number);
//     arr = arr.sort((a, b) => a - b);
//     let duplicates = [];
//     let i = 0;
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[j] != arr[i]) {
//             arr[i + 1] = arr[j];
//             i++;
//         }
//         else {
//             duplicates.push(arr[j]);
//         }
//     }

//     let n = i + 1;
//     let uniqueArr = arr.splice(0, n);
//     console.log("Unique elements are:", uniqueArr);
//     console.log("Duplicate elements are:", duplicates);
//     rl.close();
// });

//! Merge two arrays and sort them.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let arr1 = [], arr2 = [];
rl.question("Enter first array separated by space: ", (elements) => {
    arr1 = elements.split(' ').map(Number);
    rl.question("Enter second array separated by space: ", (elements) => {
        arr2 = elements.split(' ').map(Number);

        // let merged = arr1.concat(arr2);
        // merged.sort((a, b) => a - b);
        // console.log("Merged and sorted array:", merged);
        for (i = 0; i < arr2.length; i++) {
            arr1[arr1.length] = arr2[i];
        }
        console.log("Merged array :",arr1)
        arr1 = arr1.sort((a, b) => a - b);
        console.log("Sorted array :  ",arr1)

        rl.close();

    });

});
