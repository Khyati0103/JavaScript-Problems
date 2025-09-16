// Q1: String Anagram

// Write a program to check if two strings are anagrams of each other.
// Input: "listen", "silent"
// Output: True

// Q2: Maximum Subarray Sum (Kadane’s Algorithm)

// Given an array of integers, find the maximum sum of a contiguous subarray.
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// (Explanation: [4, -1, 2, 1] has sum = 6)

// Q3: Unique Character Check

// Write a function to check whether a string has all unique characters.
// Input: "abcdefa"
// Output: False

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter string: ', (str) => {
    function checkUniqueCharacters(str) {
        str = str.toLowerCase();
        let fq = {};
        for (let ch of str) {
            fq[ch] = (fq[ch] || 0) + 1;
        }
        for (let ch of str) {
            if (fq[ch] > 1) return false;
        }
        return true;
    };

    console.log(checkUniqueCharacters(str));
    rl.close();
});


//!  one better apporach for this is using set data structure
//!   let charSet = new Set(str);
//!   return str.length === uniqueChars.size;
//todo   as set alawys store unique values only so 
//todo   if query string has all unique characters then its length will be equal to set size