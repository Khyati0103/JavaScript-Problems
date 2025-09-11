// 🔹 Beginner Level

//?? Count Vowels
//? Input: "hello world"
//? Output: 3(vowels = e, o, o)

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Enter String : ", (str) => {
//     function countVowels(str) {
//         let vowels = 0;
//         let VowelsArray = "aeiouAEIOU";
//         for (let char of str) {
//             if (VowelsArray.includes(char)) {
//                 vowels++;
//             }
//         }
//         return vowels;
//     }

//     console.log(countVowels(str));
//     rl.close();
// })

// Check Palindrome(Ignoring Spaces & Case)
// Input: "Race car"
// Output: true

// rl.question("Enter String : ", (str) => {
//     function checkPalindrome(str) {
//         let rev = "";
//         str = str.split(" ").join("").toLowerCase();
//         for (let i = str.length - 1; i >= 0; i--) {
//             if (str[i] === " ") {
//                 rev += " ";
//             }
//             else {
//                 rev += str[i];
//             }
//         }
//         return rev === str;
//     }

//     console.log(checkPalindrome(str));
//     rl.close();
// })


// Find Largest Number in an Array
// Input: [2, 45, 67, 12, 89, 5]
// Output: 89

// rl.question("Enter array : ", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     arr = arr.sort((a, b) => a - b);
//     console.log(arr[arr.length - 1]);

//     console.log(max);
//     rl.close();
// })


// 🔹 Intermediate Level

// Find First Non - Repeating Character
// Input: "swiss"
// Output: "w"

// rl.question("Enter String : ", (str) => {
//     function firstNonRepeatingChar(str) {
//         let fq = {};
//         for (let ch of str) {
//             fq[ch] = (fq[ch] || 0) + 1;
//         }
//         for (let ch of str) {
//             if (fq[ch] === 1) {
//                 return ch;
//                 break;
//             }
//         }
//     }

//     console.log(firstNonRepeatingChar(str));
//     rl.close();
// });

// Rotate Array by k Steps
// Input: [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]

// rl.question("Enter array : ", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     rl.question("Enter d : ", (d) => {
//         let n = arr.length;
//         d = d % n;
//         let start = 0;
//         let end = n - 1;
//         function reverse(start, end) {
//             if (start < end) {
//                 let temp = arr[start];
//                 arr[start] = arr[end];
//                 arr[end] = temp;
//                 start++;
//                 end--;
//             }
//         }

//         reverse(0, d);
//         reverse(n - d, n - 1);
//         reverse(0, n - 1);

//         console.log(arr);
//         rl.close();

//     });

// });

// Check if Two Strings are Anagrams
// Input: "listen", "silent"
// Output: true

// rl.question("Enter first String : ", (str1) => {
//     rl.question("Enter second String : ", (str2) => {
//         function areAnagrams(str1, str2) {
//             let fq = {};
//             for (let ch of str1) {
//                 fq[ch] = (fq[ch] || 0) + 1;
//             }
//             for (let ch of str2) {
//                 if (!fq[ch]) {
//                     return false;
//                 }
//                 fq[ch]--;
//             }
//             return true;
//         }

//         console.log(areAnagrams(str1, str2));
//         rl.close();
//     });
// });

// 🔹 Advanced Level

//? Flatten Nested Array(any depth)
//? Input: [1, [2, [3, 4], 5], 6]
//? Output: [1, 2, 3, 4, 5, 6]

//! let flatArr = arr.flat(Infinity);   // flatten any depth
//! Array.isArray() is a built -in JavaScript method used to check whether a given value is an array or not.


// rl.question("Enter array : ", (elements) => {
//     let arr = JSON.parse(elements);
//     // let flatarr=arr.flat(Infinity);
//     function flattenArray(arr) {
//         let result = [];
//         for (let item of arr) {
//             if (Array.isArray(item)) {
//                 result = result.concat(flattenArray(item));
//             }
//             else {
//                 result.push(item);
//             }
//         }
//         return result;
//     }
//     console.log(flattenArray(arr));
//     rl.close();
// });

//? Find Longest Substring Without Repeating Characters
//? Input: "abcabcbb"
//? Output: 3(longest substring: "abc")
//! Here we have to use sliding window technique

//? Spiral Matrix Traversal
//? Input:

//? [[1, 2, 3],
//? [4, 5, 6],
//? [7, 8, 9]]

//? Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]


//? 🔹 Beginner Level

//? Input: a = 5, b = 10
//? Swap two numbers (with tmp & without tmp)
//? Output: a = 10, b = 5

// rl.question("Enter a and b : ", (elements) => {
//     let [a, b] = elements.split(" ").map(Number);
//! using tmp
// let tmp = a;
// a = b;
// b = tmp;
// console.log("Using tmp : ", a, b);
// rl.close();

//! without using tmp
// a = a + b;
// b = a - b;
// a = a - b
// console.log("Without using tmp : ", a, b);
// rl.close();

//! using XOR (for XOR if 1 1 => 0 , 0 0 => 0 , 1 0 => 1 , 0 1 => 1)
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log("Using XOR : ", a, b);
// rl.close();
// })

//? Input: "hello"
//? Swap first and last character of a string
//? Output: "oellh"

// rl.question("Enter String : ", (str) => {
//     if (str.length > 1) {
//         let charArray = str.split("");
//         let tmp = charArray[0];
//         charArray[0] = charArray[charArray.length - 1];
//         charArray[charArray.length - 1] = tmp;
//         str = charArray.join("");
//     }
//     console.log(str);
//     rl.close();
// });


//? Input: [1,2,3,4,5], swap arr[1] and arr[3]
//? Swap two array elements
//? Output: [1,4,3,2,5]

// rl.question("Enter array :", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     rl.question("Enter i and j : ", (indices) => {
//         let [i, j] = indices.split(" ").map(Number);
//         if (i < 0 || j < 0 || i >= arr.length || j >= arr.length) {
//             console.log("Invalid indices");
//             rl.close();
//             return;
//         }
//         let tmp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = tmp;
//         console.log(arr);
//         rl.close();
//     });
// })

//? 🔹 Intermediate Level

//? Swap elements in pairs in an array
//? Input: [1,2,3,4,5,6]
//? Output: [2,1,4,3,6,5]

// rl.question("Enter array : ", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     for (let i = 0; i < arr.length - 1; i += 2) {
//         let tmp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = tmp;
//     }
//     console.log(arr);
//     rl.close();
// });

//? Reverse an array using swapping
//? Input: [1,2,3,4,5]
//? Output: [5,4,3,2,1]

// rl.question("Enter array : ", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         let tmp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = tmp;
//         start++;
//         end--;
//     }
//     console.log(arr);
//     rl.close();
// });


//? 🔹 Advanced Level

//? Cyclically rotate array by one using swap
//? Input: [1,2,3,4,5]
//? Output: [5,1,2,3,4]

// rl.question("Enter array : ", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     // let firstelement = arr[arr.length - 1];
//     for (let i = arr.length - 1; i > 0; i--) {
//         [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
//     }
//     // arr[0] = firstelement;
//     console.log(arr);
//     rl.close();
// });



//? Swap kth element from start and end
//? Input: [10,20,30,40,50,60], k = 2
//? Output: [10,50,30,40,20,60]

// rl.question("Enter array : ", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     rl.question("Enter k : ", (k) => {
//         k = Number(k);
//         if (k <= 0 || k >= arr.length) {
//             console.log("Invalid k");
//             rl.close();
//             return;
//         }
//         let tmp = arr[k - 1];
//         arr[k - 1] = arr[arr.length - k];
//         arr[arr.length - k] = tmp;
//         console.log(arr);
//         rl.close();
//     })
// });


//? swaping three numbers without using temporary variable
//? Input: a = 5, b = 10, c = 15
//? Output: a = 15, b = 5, c = 10

// rl.question("Enter a, b and c : ", (elements) => {
//     let [a, b, c] = elements.split(" ").map(Number);
// a = a + b + c;
// b = a - (b + c);
// c = a - (b + c);
// a = a - (b + c);
// console.log(a, b, c);
// rl.close();

// let tmp = a;
// a = c;
// c = b;
// b = tmp;
// console.log(a, b, c);
// rl.close();

// a = a ^ b ^ c;
// b = a ^ b ^ c;
// c = a ^ b ^ c;
// a = a ^ b ^ c;
// console.log(a, b, c);
// rl.close();

// });

//? Find two numbers in an array without using extra space and swap them in place.

//?     Input: [10, 20, 30, 40, 50], swap 20 and 40

//? Output: [10, 40, 30, 20, 50]

rl.question("Enter array : ", (elements) => {
    let arr = elements.split(" ").map(Number);
    rl.question("Enter x and y : ", (values) => {
        let [x, y] = values.split(" ").map(Number);
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] === x && arr[j] === y) {
                    arr[i] = arr[i] ^ arr[j];
                    arr[j] = arr[i] ^ arr[j];
                    arr[i] = arr[i] ^ arr[j];
                    console.log(arr);
                    rl.close();
                    return;
                }
            }
        }
    });
});

