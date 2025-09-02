//! ----- ******  STRINGS BASICS *******-------- !//
// String Problems to Solve

//todo Strings are immutable in javascript 


// Reverse a String
// Input: "hello"
// Output: "olleh"

//* m-1 
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter String :", (str) => {
//     let arr=str.split('')
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         let tmp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = tmp;
//         start++;
//         end--;
//     }
//     let reversed=arr.join('');
//     console.log(reversed);
//     rl.close();
// })

//* m-2 simpany iterate array backwards
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter String :", (str) => {
//     let reversed = "";
//     for (i = str.length - 1; i>=0; i--) {
//         reversed += str[i];
//     }
//     console.log(reversed);
//     rl.close();
// });



// Check Palindrome
// A string is palindrome if it reads the same forward and backward.
// Input: "madam"
// Output: true

// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter String :", (str) => {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     if (reversed.toLowerCase() === str.toLowerCase()) {
//         console.log("True");

//     }
//     else {
//         console.log("False");

//     }
//     rl.close();
// });


// Count Vowels and Consonants
// Input: "javascript"
// Output: Vowels: 3, Consonants: 7

// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter String :", (str) => {
//     let Vowels = 0;
//     let Consonants = 0;
//     let s = str.toLowerCase();
//     let VowelsArray = ['a', 'e', 'i', 'u', 'o']
//     for (let i = 0; i < str.length - 1; i++) {
//         let ch = str[i];
//         if (ch >= 'a' && ch <= 'z') {
//             if (VowelsArray.includes(ch)) {
//                 Vowels++;
//             }
//             else {
//                 Consonants++;
//             }
//         }
//     }
//     console.log(`There are total ${Vowels} Vowels and ${Consonants} Consonants in the ${str}`);
//     rl.close();
// });

// Find First Non-Repeated Character
// Input: "aabbcdeff"
// Output: "c"
//todo for first non repetive we can do it with indexof() and lastindexof()  asthe letter who is only once both 
//todo    indexof() and lastindexof() will retuen same index

// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter String :", (str) => {
//     function firstNonRepeatedChar(str) {
//         for (let ch of str) {
//             if (str.indexOf(ch) === str.lastIndexOf(ch)) {
//                 return ch;
//             }
//         }
//         return null;
//     }
//     console.log(firstNonRepeatedChar(str));
//     rl.close();
// });




// Check Anagram
// Two strings are anagrams if they have the same characters in any order.
// Input: "listen", "silent"
// Output: true

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter first string: ", (str1) => {
//     rl.question("Enter second string: ", (str2) => {
//         function checkAnagram(str1, str2) {
//             // If lengths differ, they can't be anagrams
//             if (str1.length !== str2.length) return false;

//             // Compare sorted strings
//             return str1.split('').sort().join('') === str2.split('').sort().join('');
//         }

//         console.log("Are Anagrams? :", checkAnagram(str1, str2));
//         rl.close();
//     });
// });


// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter first string: ", (str1) => {
//     rl.question("Enter second string: ", (str2) => {
//         function checkAnagram(str1, str2) {
//             if (str1.length !== str2.length) return false;

//             let freq = {};

//             // Count frequency from str1
//             for (let ch of str1) {
//                 freq[ch] = (freq[ch] || 0) + 1;
//             }

//             // Subtract frequency using str2
//             for (let ch of str2) {
//                 if (!freq[ch]) {
//                     return false; // char not found or overused
//                 }
//                 freq[ch]--;
//             }

//             return true; // all matched
//         }

//         console.log("Are Anagrams? :", checkAnagram(str1, str2));
//         rl.close();
//     });
// });


// Character Frequency Count
// Input: "programming"
// Output:

// p → 1
// r → 2
// o → 1
// g → 2
// a → 1
// m → 2
// i → 1
// n → 1


// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter String :", (str) => {
//     function frequencyCount(str) {
//         let freq = {};
//         for (let ch of str) {
//             freq[ch] = (freq[ch] || 0) + 1;
//         }
//         return freq;
//     }
//     console.log(frequencyCount(str));
//     rl.close();
// })


// Longest Word in a Sentence
// Input: "I love learning JavaScript"
// Output: "JavaScript"

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter Strings :", (str) => {
    function longestWord(str) {
        let words = str.split(" ");
        console.log(words)
        let longest = "";
        for (let word of words) {
            if (word.length > longest.length) {
                longest = word;
            }
        }

        return longest;
    }
    console.log(longestWord(str))
    rl.close();
});





// Remove Duplicate Characters
// Input: "programming"
// Output: "progamin"

//todo     set is a data structure that only stores unigue elements

// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter String :", (str) => {
// function removeDuplicates(str) {
//     return [...new Set(str)].join('');
// }

//     function removeDuplicates(str) {
//         let freq = {};
//         let result = "";
//         for (let ch of str) {
//             if (!freq[ch]) {
//                 result += ch;
//                 freq[ch] = 1;
//             }
//         }
//         return result;
//     }

//     console.log(removeDuplicates(str));
//     rl.close();
// })
