// 🔹 Array Problems

//? 1. Reverse an array without using reverse()
// Input: [1, 2, 4, 5]
// Output: [5, 4, 2, 1]

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//todo Method-1

// rl.question("Enter array : ", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     let rev = [];
//     for (i = arr.length - 1; i >= 0; i--) {
//         rev.push(arr[i]);
//     }
//     console.log(rev);
//     rl.close();
// })

//todo Method-2
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

//? 2. Rotate an array by k steps (say k = 2, right rotation)
// Input: [1, 2, 3, 4, 5]
// Output: [4, 5, 1, 2, 3]

//todo Method 1
// rl.question("Enter array : ", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     rl.question("Enter K : ", (k) => {
//         let d = Number(k);
//         let n = arr.length;
//         d = d % n
//         let ogArray = arr.slice();
//         function Reverse(start, end) {
//             while (start < end) {
//                 let tmp = arr[start];
//                 arr[start] = arr[end];
//                 arr[end] = tmp;
//                 start++;
//                 end--;
//             }
//         }
//         console.log(`Right rotation by ${d}th Position : `)
//         Reverse(0, d);
//         Reverse(n - d, n - 1);
//         Reverse(0, n - 1);
//         console.log(arr);
//         arr = ogArray;
//         console.log(`left rotation by ${d}th Position : `)
//         Reverse(0, d - 1);
//         Reverse(d, n - 1);
//         Reverse(0, n - 1);
//         console.log(arr);
//         rl.close();
//     })
// })

//todo Method -2
// rl.question("Enter array : ", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     rl.question("Enter K : ", (k) => {
//         let d = Number(k);
//         let n = arr.length;
//         d = d % n
//         let tmp = [];
//         for (let i = n - d; i < n; i++) {
//             tmp.push(arr[i])
//         }
//         for (let i = n - 1; i >= d; i--) {
//             arr[i] = arr[i - d];
//         }
//         for (let i = 0; i < d; i++) {
//             arr[i] = tmp[i];
//         }
//         console.log(arr);
//         rl.close();
//     });
// });

//? 3. Find max and min in array
// Input: [10, 4, 7, 22, 1]
// Output: Max = 22, Min = 1

// rl.question("Enter array :", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }

//     console.log(`Min and Max is ${max} and ${min}.`)
//     rl.close();
// })

//? 4. Remove duplicates from array
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

// rl.question("Enter array :", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     arr = [...new Set(arr)];
//     console.log(arr);
//     rl.close();
// });

//? 5. Merge and sort two arrays (Remove duplicates also)
// Input: [3, 1, 5] and [2, 6, 4]
// Output: [1, 2, 3, 4, 5, 6]

// rl.question("Enter array 1 :", (elements) => {
//     let arr1 = elements.split(" ").map(Number);
//     rl.question("Enter array 2 :", (elements) => {
//         let arr2 = elements.split(" ").map(Number);
//         let mergedArray = arr1.concat(arr2);
//         mergedArray = mergedArray.sort((a, b) => a - b);
//         let fq = {};
//         for (let num of mergedArray) {
//             fq[num] = (fq[num] || 0) + 1;
//         }
//         let sorted = Object.entries(fq).sort((a, b) => b[1] - a[1]);
//         if (sorted.length > 1) {
//             console.log(`Second most repeating : ${sorted[1][0]} -> ${sorted[1][1]}.`)
//         }
//         else {
//             console.log(`No repeating element. `)
//         }
// let uniqueArray = [];
// for (let i = 0; i < mergedArray.length; i++) {
//     if (i === 0 || mergedArray[i] !== mergedArray[i - 1]) {
//         uniqueArray.push(mergedArray[i]);
//     }
// }
// console.log(uniqueArray);
// let Mergedarray = [...new Set(arr1)];
// Mergedarray = Mergedarray.sort((a, b) => a - b);
// console.log(Mergedarray);
//         rl.close();

//     });
// });




// 🔹 String Problems

//? 1. Check if two strings are anagrams
// Input: "listen", "silent"
// Output: True (Anagram)

//todo Method 1
// rl.question("Enter String 1 :", (str1) => {
//     rl.question("Enter String 2:", (str2) => {
//         function checkAnagram(str1, str2) {
//             if (str1.length !== str2.length) {
//                 return false;
//             }
//             return (str1.split("").sort().join("") === str2.split("").sort().join(""))
//         }
//         console.log(` Anagram : ${checkAnagram(str1, str2)}`);
//         rl.close();
//     });
// });

//todo Method 2
// rl.question("Enter String 1 :", (str1) => {
//     rl.question("Enter String 2:", (str2) => {
//         function checkAnagram(str1, str2) {
//             let fq = {}
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
//         console.log(` Anagram : ${checkAnagram(str1, str2)}`);
//         rl.close();
//     });
// });

//? 2. Count vowels and consonants
// Input: "hello"
// Output: Vowels = 2 (e, o), Consonants = 3 (h, l, l)

// rl.question("Enter String : ", (str) => {
//     let vowels = 0;
//     let consonants = 0;
//     let vowelArray = ['a', 'e', 'i', 'o', 'u'];
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];
//         if (ch >= 'a' && ch <= 'z') {
//             if (!vowelArray.includes(ch)) {
//                 consonants++;
//             }
//             else {
//                 vowels++;
//             }
//         }
//     }
//     console.log(`Vowels are ${vowels} and Consonants are ${consonants}.`);
//     rl.close();
// })

//? 3. Reverse each word in a sentence
// Input: "I love JS"
// Output: "I evol SJ"

// rl.question("Enter String :", (str) => {
//     words = str.split(" ");
//     let result = "";
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         let rev = "";
//         for (let j = word.length - 1; j >= 0; j--) {
//             rev += word[j];
//         }
//         result += rev + "  ";
//     }
//     console.log(result.trim());
//     rl.close();
// });

//! Method 2
// rl.question("Enter String :", (str) => {
//     let word = "";
//     let result = "";
//     for (let i = 0; i <= str.length; i++) {
//         if (i === str.length || str[i] === " ") {
//             let rev = "";
//             for (let j = word.length - 1; j >= 0; j--) {
//                 rev += word[j];
//             }
//             result += rev + " ";
//             word = "";
//         }
//         else {
//             word += str[i];
//         }
//     }
//     console.log(result.trim());
//     rl.close();
// })

// rl.question("Enter string : ", (str) => {
//     let words = str.split(" ");
//     let result = "";
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         let rev = "";
//         for (let j = word.length - 1; j >= 0; j--) {
//             rev += word[j];
//         }
//         result += rev + " ";
//     }
//     console.log(result);
//     rl.close();
// })


//? 4. Find character frequency
// Input: "aabbc"
// Output: a → 2, b → 2, c → 1

// rl.question("Enter String : ", (str) => {
// function countFrequency(str) {
//     let fq = {};
//     for (let ch of str) {
//         fq[ch] = (fq[ch] || 0) + 1;
//     }
//     output = Object.entries(fq)
//     return output;
// }
// console.log(countFrequency(str));

//     let fq = {};
//     for (let ch of str) {
//         fq[ch] = (fq[ch] || 0) + 1;
//     }
//     let result = "";
//     for (let ch in fq) {
//         result += ch + " -> " + fq[ch] + ", ";
//     }
//     console.log(result.slice(0,-2));

//     rl.close();
// });

//? 5. Remove duplicate characters
// Input: "programming"
// Output: "progamin"

// rl.question("Enter String : ", (str) => {
//     function duplicateCharacter(str) {
//         //     return [...new Set(str)].join("");
//         let fq = {};
//         let result = "";
//         for (let ch of str) {
//             if (!fq[ch]) {
//                 result += ch;
//                 fq[ch] = 1;
//             }
//         }
//         return result;
//     }
//     console.log(duplicateCharacter(str));
//     rl.close();
// })

// 🔹 Number Problems

//? 1. Reverse a number
// Input: 12345
// Output: 54321

//todo Without converting into array
// rl.question("Enter Number : ", (n) => {
//     let result = "";
//     while (n > 0) {
//         let digit = n % 10;
//         result += digit;
//         n = Math.floor(n / 10);
//     }
//     console.log(result);
//     rl.close();
// })

// //todo converting into array;
// rl.question("Enter Number :", (n) => {
//     let num = n.toString().split("").map(Number);
//     let result = [];
//     for (let i = num.length - 1; i >= 0; i--) {
//         result.push(num[i]);
//     }
//     console.log(result.join(""));
//     rl.close();
// })



//? 2. Check if number is palindrome
// Input: 121
// Output: Palindrome

// Input: 123
// Output: Not Palindrome

// rl.question("Enter Number : ", (num) => {
//     let n = num;
//     let rev = "";
//     while (num > 0) {
//         rev = rev * 10 + (num % 10);
//         num = Math.floor(num / 10);
//     }
//     if (n == rev) {
//         console.log("Palindrome.");
//     }
//     else {
//         console.log("Not Palindrome.");
//     }
//     rl.close();
// });

//? 3. Armstrong number
// Input: 153 → 1³ + 5³ + 3³ = 153
// Output: Armstrong

// Input: 123
// Output: Not Armstrong

// rl.question("Enter number : ", (num) => {
//     num = Number(num);
//     let n = num;
//     let length = Math.floor(Math.log10(num)) + 1;
//     let rev = 0;
//     while (num > 0) {
//         let digit = num % 10;
//         rev += Math.pow(digit, length);
//         num = Math.floor(num / 10);
//     }
//     if (n === rev) {
//         console.log("Amstrong.");
//     }
//     else {
//         console.log("Not Armstrong.")
//     }
//     rl.close();
// })


//? 4. Prime number check
// Input: 7 → Divisible only by 1 and 7
// Output: Prime

// Input: 8 → Divisible by 2, 4
// Output: Not Prime

// rl.question("Enter number : ", (num) => {
//     num = Number(num);
//     if (num === 1) {
//         console.log("Not Prime.");
//         rl.close();
//         return;
//     }
//     let ispalindrome = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             ispalindrome = false;
//             break;
//         }
//         else {
//             ispalindrome = true;
//         }
//     }

//     if (ispalindrome === true) {
//         console.log("Prime.");
//     }
//     else {
//         console.log("Not Prime.");
//     }
//     rl.close();
// })


// ?5. Factorial & Fibonacci series
// Factorial of 5 = 5 × 4 × 3 × 2 × 1 = 120

// rl.question("Enter number :", (num) => {
//     num = Number(num);
//     function factorial(num) {
//         let fact = 1;
//         for (let i = 1; i <= num; i++) {
//             fact *= i;
//         }
//         return fact;
//     }
//     console.log(factorial(num) );
//     rl.close();
// })

//? Fibonacci (n=6) = 0 1 1 2 3 5

// rl.question("Enter number :", (num) => {
//     num = Number(num);
//     let first = 0;
//     let second = 1;
//     let result = "";
//     for (let i = 1; i <= num; i++) {
//         result += first + " ";
//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     console.log(result);
//     rl.close();
// })

// rl.question("Enter number :", (num) => {
//     num = Number(num);
//     let result = [0, 1];
//     for (let i = 2; i <= num; i++) {
//         result[i] = result[i - 1] + result[i - 2];
//     }
//     console.log(result.join(" "));
//     rl.close();
// })

// 🔹 Frequency & Array-Based

//? 1. Find Element with 2nd Highest Frequency
// Input: [1,2,2,3,3,3,4,4,4,4,5]
// Output: 3 (since 4 → 4 times, 3 → 3 times)

// rl.question("Enter Array : ", (elements) => {
//     arr = elements.split(" ").map(Number);
//     function secondHighestFrequency(arr) {
//         let fq = {};
//         for (let element of arr) {
//             fq[element] = (fq[element] || 0) + 1;
//         }
//         let sorted = Object.entries(fq).sort((a, b) => b[1] - a[1]);
//         if (sorted.length < 2) {
//             return `No Second highest element.`;
//         }
//         let highestfrequency = sorted[0][1];
//         let secondHighestFrequency = null;
//         for (let i = 0; i < sorted.length; i++) {
//             if (sorted[i][1] < highestfrequency) {
//                 secondHighestFrequency = sorted[i][1];
//                 break;
//             }
//         }
//         if (secondHighestFrequency === null) return "No second-highest frequency.";

//         let result = sorted.filter(([key, value]) => value === secondHighestFrequency).map(([key, value]) => `${key} -> ${value}`);
//         return `Second Highest Frequency : ${result.join(", ")} `;
//     }
//     console.log(secondHighestFrequency(arr));
//     rl.close();
// })



//? 2. Find First Non-Repeating Element
// Input: [1,2,2,1,3,4,3]
// Output: 4

// rl.question(" Enter array :", (elements) => {
// function firstNonRepeatedelement(elements) {
//     for (let element of elements) {
//         if (elements.indexOf(element) === elements.lastIndexOf(element)) {
//             return element;
//             break;
//         }
//     }
// }

//     function firstNonRepeatedelement(elements) {
//         let fq = {};
//         for (let num of elements) {
//             fq[num] = (fq[num] || 0) + 1;
//         }
//         let result = [];
//         for (let num of elements) {
//             if (fq[num] === 1) {
//                 return num;
//                 break;
//             }
//         }
//     }

//     console.log(firstNonRepeatedelement(elements));
//     rl.close();
// })

//  function secondNonRepeatedelement(elements) {
//         let fq = {};
//         for (let num of elements) {
//             fq[num] = (fq[num] || 0) + 1;
//         }
//         let result = [];
//         for (let num of elements) {
//             if (fq[num] === 1) {
//                 result.push(num);
//             }
//         }
//         return result.length >= 2 ? result[1] : null;
//     }

//     console.log(secondNonRepeatedelement(elements));


//? 3. Find Majority Element (> n/2 times)
// Input: [3,3,4,2,3,3,5,3]
// Output: 3



//? 4. Missing Number in 1 to n
// Input: [1,2,4,5,6], n = 6
// Output: 3

// rl.question("Enter Array :", (elements) => {
//     arr = elements.split(" ").map(Number);
//     rl.question("Enter n :", (num) => {
//         let n = Number(num);
//         let expectedSum = (n * (n + 1)) / 2;
//         let actualsum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             actualsum += arr[i];
//         }
//         let missingNumber = expectedSum - actualsum;
//         console.log(`Missing Number is : ${missingNumber}`);
//         rl.close();
//     });
// });

//? 5. Find Pair with Given Sum (target = 10)
// Input: [2,4,6,3,7]
// Output: (4,6) or (3,7)

// 🔹 String-Based

//? 1. First Non-Repeating Character
// Input: "swiss"
// Output: "w"
//! also can compare str.indexOf(ch)===str.lastIndexOf(ch){
//! return ch ;
//! break }

// rl.question("Enter string :", (str) => {
//     function firstNonRepeatedChar(str) {
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
//     console.log(firstNonRepeatedChar(str));
//     rl.close();
// })

//! second non repeating character
//! break }

// rl.question("Enter string :", (str) => {
//     function secondNonRepeatedChar(str) {
//         let fq = {};
//         for (let ch of str) {
//             fq[ch] = (fq[ch] || 0) + 1;
//         }
//         let result = [];
//         for (let ch of str) {
//             if (fq[ch] === 1) {
//                 result.push(ch);
//             }
//         }
//         return result.length >= 2 ? result[1] : null;
//     }
//     console.log(secondNonRepeatedChar(str));
//     rl.close();
// })

//? 2. Check if String is Pangram (contains all letters a–z)
// Input: "The quick brown fox jumps over the lazy dog"
// Output: True

//? 3. Find Longest Word in Sentence
// Input: "I love programming in JavaScript"
// Output: "programming"

rl.question("Enter String : ", (str) => {
    function longestWord(str) {
        let words = str.split(" ");
        let longest = "";
        for (let word of words) {
            if (word.length > longest.length) {
                longest = word;
            }
        }
        return longest;
    }
    console.log(longestWord(str));
    rl.close();
})


//? 4. Remove All Duplicates but Keep Order
// Input: "banana"
// Output: "ban"

//? 5. Find Most Frequent Character
// Input: "success"
// Output: "s" (appears 3 times)



// 🔹 Number-Based

//? 1. Sum of Even & Odd Numbers
// Input: [1,2,3,4,5,6]
// Output: Even Sum = 12, Odd Sum = 9

// rl.question("Enter array : ", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     let evenSum = 0;
//     let oddSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenSum += arr[i];

//         }
//         else {
//             oddSum += arr[i];
//         }
//     }
//     console.log(`Even sum is ${evenSum} and odd sum is ${oddSum}.`);
//     rl.close();
// })

//? 2. Find GCD & LCM of 12 and 18
// Output: GCD = 6, LCM = 36

//? 3. Count Digits in Number
// Input: 98765
// Output: 5

// rl.question("Enter number :", (num) => {
//     num = Number(num);
//     //todo Method 1
//     // let digitCount = Math.floor(Math.log10(num)) + 1;
//     // console.log(digitCount);
//     //todo Method
//     let digitCount = 0;
//     while (num > 0) {
//         let digit = num % 10;
//         digitCount += 1;
//         num = Math.floor(num / 10);
//     }
//     console.log(digitCount);
//     rl.close();
// })

//? 4. Sum of Digits
// Input: 1234
// Output: 10

// rl.question("Enter number :", (num) => {
//     num = Number(num);
//     let sum = 0;
//     while (num > 0) {
//         let digit = num % 10;
//         sum += digit;
//         num = Math.floor(num / 10);
//     }
//     console.log(sum);
//     rl.close();
// })


//? 5. Strong Number Check (sum of factorial of digits = number)
// Input: 145 → 1! + 4! + 5! = 145
// Output: Strong Number

// rl.question("Enter number :", (num) => {
//     num = Number(num);
//     n = num;
//     let sum = 0;
//     function factorial(digit) {
//         let fact = 1;
//         for (let i = 1; i <= digit; i++) {
//             fact *= i;
//         }
//         return fact;
//     }
//     while (num > 0) {
//         let digit = num % 10;
//         sum += factorial(digit);
//         num = Math.floor(num / 10);
//     }
//     if (n === sum) {
//         console.log("Strong Number.")
//     }
//     else {
//         console.log("Not Strong Number.");
//     }
//     rl.close();
// })

// 🔹 Pattern Problems

//? 1. Right-Angle Triangle (n=5)

// *
// * *
// * * *
// * * * *
// * * * * *

// rl.question("Enter n : ", (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += "*" + " ";
//         }
//         console.log(row.trim());
//     }
//     rl.close();
// })


//? 2. Inverted Triangle (n=5)

// * * * * *
// * * * *
// * * *
// * *
// *

// rl.question("Enter n : ", (n) => {
//     for (let i = n; i > 0; i--) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += "*" + " ";
//         }
//         console.log(row.trim());
//     }
//     rl.close();
// })



//? 3. Pyramid (n=5)

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// rl.question("Enter n :", (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         let space = " ".repeat(n - i);
//         for (let j = 1; j <= i; j++) {
//             row += "* ";
//         }
//         console.log(space + row.trim());
//     }
//     rl.close();
// })


//? 4. Number Triangle (n=5)

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// rl.question("Enter n :", (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += j + " ";
//         }
//         console.log(row);
//     }
//     rl.close();
// });


//? 5. Palindrome Number Pyramid (n=5)

//     1
//    121
//   12321
//  1234321
// 123454321

// rl.question("Enter n :", (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         space = " ".repeat(n - i);
//         for (let j = 1; j <= i; j++) {
//             row += j;
//         }
//         for (let j = i - 1; j > 0; j--) {
//             row += j;
//         }
//         console.log(space + row);
//     }
//     rl.close();
// });