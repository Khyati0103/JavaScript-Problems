//! First Type 

//todo constant window

//? Input: arr = [2, 1, 5, 1, 3, 2], k = 3
//? Output: 9
//? Explanation: Subarray [5, 1, 3] has the maximum sum of 9.
//? text
//? Copy code
//? Input: arr = [2, 3, 4, 1, 5], k = 2
//? Output: 7
//? Explanation: Subarray [3, 4] has the maximum sum of 7.  

const { type } = require('os');
const { stringify } = require('querystring');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// rl.question("Enter array : ", (elements) => {
//     arr = elements.split(" ").map(Number);
//     rl.question("Enter k : ", (k) => {
//         k = parseInt(k);
//         let l = 0;
//         let r = k - 1;
//         let sum = 0;
//         if (k < 0 || k > arr.length) {
//             console.log("Enter proper k.");
//             rl.close();
//             return;
//         }


//         for (let i = l; i <= r; i++) {
//             sum += arr[i];
//         }
//         let maxsum = sum;

//         while (r < arr.length - 1) {
//             sum = sum - arr[l];
//             l++;
//             r++;
//             sum = sum + arr[r];
//             if (sum > maxsum) {
//                 maxsum = sum;
//             }
//         }

//         console.log(`Max Sum is ${maxsum}`);
//         rl.close();
//     })

// });


//? 1. Maximum Average Subarray

//? Description:
//? Given an array arr and integer k, find the subarray of size k with the maximum average.

//? Example:

//? Input: arr = [1, 12, -5, -6, 50, 3], k = 4
//? Output: 12.75
//? Explanation: Subarray [12, -5, -6, 50] has max average = 51/4 = 12.75

// rl.question("Enter array : ", (elements) => {
//     arr = elements.split(" ").map(Number);
//     rl.question("Enter K : ", (k) => {
//         k = Number(k);
//         if (k < 1 || k > arr.length) {
//             console.log("Enter Proper K");
//             rl.close();
//             return;
//         }
//         let l = 0;
//         let r = k - 1;
//         let avg = 0;
//         let sum = 0;
//         for (let i = l; i <= r; i++) {
//             sum += arr[i];
//         }
//         let maxavg = sum / k;
//         while (r < arr.length - 1) {
//             sum = sum - arr[l];
//             l++;
//             r++;
//             sum = sum + arr[r];
//             avg = sum / k;
//             if (avg > maxavg) {
//                 maxavg = avg;
//             }
//         }
//         console.log(maxavg);
//         rl.close();
//     })
// })



//? 2. Smallest Sum Subarray of Size K

//? Description:
//? Find the minimum sum of any contiguous subarray of size k.

//? Example:

//? Input: arr = [2, 1, 5, 1, 3, 2], k = 3
//? Output: 4
//? Explanation: Subarray [1, 5, 1] sum = 7, [1, 3, 2] sum = 6, [2, 1, 5] sum = 8, minimum is 4 from [1, 1, 2]

// rl.question("Enter array :", (elements) => {
//     arr = elements.split(" ").map(Number);
//     rl.question("Enter K : ", (k) => {
//         k = Number(k);
//         if (k < 1 || k > arr.length) {
//             console.log("Enter Proper K");
//             rl.close();
//             return;
//         }
//         let l = 0;
//         let r = k - 1
//         let sum = 0;
//         for (let i = l; i <= r; i++) {
//             sum += arr[i];
//         }
//         let minSum = sum;
//         let startIndex = l;
//         while (r < arr.length - 1) {
//             sum = sum - arr[l];
//             l++;
//             r++;
//             sum = sum + arr[r];
//             if (sum < minSum) {
//                 minSum = sum;
//                 startIndex = l;

//             }
//         }
//         let subarray = arr.slice(startIndex, startIndex + k);
//         console.log(minSum);
//         console.log(subarray);
//         rl.close();
//     })
// })

//? 3. Count of Subarrays with Sum Greater Than X

//? Description:
//? Given an array arr, an integer k, and a number X, count the number of subarrays of size k whose sum is greater than X.

//? Example:

//? Input: arr = [1, 2, 3, 4, 5], k = 2, X = 5
//? Output: 2
//? Explanation: Subarrays [3, 4] and [4, 5] have sums greater than 5.

// rl.question("Enter array :", (elements) => {
//     arr = elements.split(" ").map(Number);
//     rl.question("Enter k : ", (k) => {
//         k = Number(k);
//         rl.question("Enter X : ", (x) => {
//             x = Number(x);
//             let count = 0;
//             let sum = 0;
//             let l = 0;
//             let r = k - 1;
//             let subArrays = [];
//             for (let i = l; i <= r; i++) {
//                 sum += arr[i];
//             }
//             startIndex = l;
//             // Check the first window
//             if (sum > x) {
//                 count++;
//                 subArrays.push(arr.slice(l, r + 1));
//             }
//             while (r < arr.length - 1) {
//                 sum = sum - arr[l];
//                 l++;
//                 r++;
//                 sum = sum + arr[r];
//                 if (sum > x) {
//                     count++;
//                     startIndex = l;
//                     subArrays.push(arr.slice(l, r + 1));
//                 }
//             }
//             console.log(`Total subarrays greater than ${x} is ${count} and subarrays are:`, subArrays);
//             rl.close();
//         });
//     });
// });



//? 4. Max of Each Subarray of Size K

//? Description:
//? Given an array, find the maximum element of each contiguous subarray of size k.

//? Example:

//? Input: arr = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
//? Output: [3, 3, 5, 5, 6, 7]

// rl.question("Enter Array :", (elements) => {
//     arr = elements.split(" ").map(Number);
//     rl.question("Enter k : ", (k) => {
//         let l = 0;
//         let r = k - 1;
//         let maxElements = [];
//         while (r < arr.length) {
//             let max = arr[l];
//             for (let i = l; i <= r; i++) {
//                 if (arr[i] > max) {
//                     max = arr[i];
//                 }
//             }
//             maxElements.push(max);
//             l++;
//             r++;
//         }
//         console.log(maxElements);
//         rl.close();
//     });
// });


//? 5. First Negative Number in Every Window of Size K

//? Description:
//? For each window of size k, find the first negative number. If no negative number exists, output 0.

//? Example:

//? Input: arr = [12, -1, -7, 8, -15, 30, 16, 28], k = 3
//? Output: [-1, -1, -7, -15, -15, 0]

// rl.question("Enter Array :", (elements) => {
//     arr = elements.split(" ").map(Number);
//     rl.question("Enter K : ", (k) => {
//         k = Number(k);
//         let l = 0;
//         let r = k - 1;
//         let negativeNumbers = [];
//         while (r < arr.length) {
//             let found = false;
//             for (let i = l; i <= r; i++) {
//                 if (arr[i] < 0) {
//                     negativeNumbers.push(arr[i]);
//                     found = true;
//                     break;
//                 }
//             }
//             if (!found) {
//                 negativeNumbers.push(0);
//             }
//             l++;
//             r++;
//         }
//         console.log(negativeNumbers);
//         rl.close();
//     });
// });


//? 🔹 1. Maximum Vowels in a Substring of Size K

//? Problem:
//? Given a string s and integer k, return the maximum number of vowels in any substring of length k.

//? Example:

//? Input: s = "abciiidef", k = 3
//? Output: 3
//? Explanation: "iii" has 3 vowels.

// rl.question("Enter string : ", (str) => {
//     rl.question("Enter k : ", (k) => {
//         k = Number(k);
//         let vowels = "AEIOUaeiou";
//         let l = 0;
//         let r = k - 1;
//         let maxvowelcount = 0;
//         let bestSubstring = [];

//         while (r < str.length) {
//             vowelcount = 0;
//             for (let i = l; i <= r; i++) {
//                 let ch = str[i];
//                 if (vowels.includes(ch)) {
//                     vowelcount++;
//                 }
//             }
//             if (vowelcount > maxvowelcount) {
//                 maxvowelcount = vowelcount;
//                 bestSubstring = [str.substring(l, r + 1)];
//             } else if (vowelcount === maxvowelcount && maxvowelcount > 0) {
//                 bestSubstring.push(str.substring(l, r + 1));
//             }

//             l++;
//             r++;
//         }
//         console.log(maxvowelcount);
//         console.log("Substring : ", bestSubstring);
//         rl.close();
//     });
// });


//? 🔹 2. Check if Any Substring of Size K is a Palindrome

//? Problem:
//? Given a string s and integer k, check if any substring of length k is a palindrome.

//?  Example:

//? Input: s = "abacdfgdcaba", k = 3
//? Output: true
//? Explanation: substring "aba" is a palindrome.

// rl.question("Enter String : ", (str) => {
//     rl.question("Enter k:", (k) => {
//         function checkPlaindrome(subString) {
//             let reverseString = "";
//             for (let i = subString.length - 1; i >= 0; i--) {
//                 reverseString += subString[i];
//             }
//             if (subString === reverseString) {
//                 return true;
//             }
//             return false;
//         }
//         let l = 0;
//         let r = k - 1;
//         let palindromes = [];
//         let found = false;

//         while (r < str.length) {
//             let subString = "";
//             for (let i = l; i <= r; i++) {
//                 subString += str[i];
//             }
//             if (checkPlaindrome(subString)) {
//                 palindromes.push(subString);
//                 if (!found) {
//                     found = true;
//                 }
//             }
//             l++;
//             r++;
//         }
//         console.log(found,"\n",palindromes);
//         rl.close();
//     })
// })

//? 🔹 3. First Unique Character in Every Window of Size K

//? Problem:
//? Given a string s and k, for each substring of size k, find the first unique character. If none, return -1.

//? ✅ Example:

//? Input: s = "aabcdbc", k = 3
//? Output: ["b", "c", "d", "b", "c"]

// rl.question("Enter string : ", (str) => {
//     rl.question("Enter k : ", (k) => {
//         function firstUniqueCharacter(subString) {
//             // let uniqueCharacters = [];
//             for (let i = 0; i < subString.length; i++) {
//                 let ch = subString[i];
//                 if (subString.indexOf(ch) === subString.lastIndexOf(ch)) {
//                     return ch;
//                     break;
//                 }
//             }

//             return null;
//         }
//         let l = 0;
//         let r = k - 1;
//         let uniqueCharacters = [];
//         while (r < str.length) {
//             let subString = "";
//             for (let i = l; i <= r; i++) {
//                 subString += str[i];
//             }
//             let uniquevalue = firstUniqueCharacter(subString);
//             if (uniquevalue !== null) {
//                 uniqueCharacters.push(uniquevalue);
//             };
//             l++;
//             r++;
//         }
//         console.log(uniqueCharacters);
//         rl.close();
//     })
// })

//? 🔹 4. Count Distinct Characters in Every Window of Size K

//? Problem:
//? Given a string s and integer k, count how many distinct characters are in every substring of length k.

//? ✅ Example:

//? Input: s = "abcabc", k = 3
//? Output: [3, 3, 3, 3]

// rl.question("Enter String : ", (str) => {
//     rl.question("Enter k : ", (k) => {
//         function countDistinctCharacter(subString) {
//             subString = [...new Set(subString)].join("");
//             return subString.length;
//             // let count = 0;
//             // for (let i = 0; i < subString.length; i++) {
//             //     let ch = subString[i];
//             //     if (subString.indexOf(ch) === subString.lastIndexOf(ch)) {
//             //         count++;
//             //     }
//             // }
//             // return count;
//         }
//         let l = 0;
//         let r = k - 1;
//         let uniqueCharacterscount = [];
//         while (r < str.length) {
//             let subString = "";
//             for (let i = l; i <= r; i++) {
//                 subString += str[i];
//             }
//             let count = countDistinctCharacter(subString);
//             uniqueCharacterscount.push(count);
//             l++;
//             r++;
//         }
//         console.log(uniqueCharacterscount);
//         rl.close();
//     });
// });


//? 🔹 5. Find All Anagrams of a Pattern of Size K

//? Problem:
//? Given a string s and a smaller string p (pattern), find all start indices of substrings in s that are anagrams of p.

//? ✅ Example:

//? Input: s = "cbaebabacd", p = "abc"
//? Output: [0, 6]
//? Explanation: "cba" (at 0) and "bac" (at 6) are anagrams of "abc".

// rl.question("Enter String : ", (str) => {
//     rl.question("Enter smaller string(p)  :  ", (str1) => {
//         k = str1.length;
//         function checkAngram(subString, str1) {
//             if (subString.split("").sort().join("") === str1.split("").sort().join("")) {
//                 return true;
//             }
//             return false;

//         }
//         let l = 0;
//         let r = k - 1;
//         let indexofAnagrams = [];

//         while (r < str.length) {
//             let subString = "";
//             for (let i = l; i <= r; i++) {
//                 subString += str[i];
//             }
//             if (checkAngram(subString, str1)) {
//                 indexofAnagrams.push(l);
//             }
//             l++;
//             r++;
//         }
//         console.log(indexofAnagrams);
//         rl.close();
//     })
// })

//! 🔹 6. Longest Substring with Exactly K Distinct Characters (Problem of Variable window)

//! Problem:
//! Given a string s and integer k, find the length of the longest substring that contains exactly k distinct characters.

//!  Example:

//! Input: s = "aabacbebebe", k = 3
//! Output: 7
//! Explanation: "cbebebe" has length 7 with 3 distinct characters.



//? 🔹 7. Check If a Substring of Size K Contains All Unique Characters

//? Problem:
//? Given s and integer k, return true if any substring of length k has all unique characters.

//? ✅ Example:

//? Input: s = "abac", k = 3
//? Output: true
//? Explanation: "bac" has all unique chars.

// rl.question("Enter String : ", (str) => {
//     rl.question("Enter k : ", (k) => {
//         k = Number(k);
//         function uniqueCharacters(subString, k) {
//             let uniqueSubstring = [...new Set(subString)].join("");
//             if (uniqueSubstring.length === k) {
//                 return true;
//             }
//             return false;
//         }
//         let l = 0;
//         let r = k - 1;
//         let uniqueCharactersArray = [];
//         let found = false;

//         while (r < str.length) {
//             let subString = "";
//             for (let i = l; i <= r; i++) {
//                 subString += str[i];
//             }
//             if (uniqueCharacters(subString, k)) {
//                 uniqueCharactersArray.push(subString);
//                 if (!found) {
//                     found = true;
//                 }
//             }
//             l++;
//             r++;
//         }
//         console.log(found, "\n", uniqueCharactersArray);
//         rl.close();

//     })
// })

//? 🔹 8. Smallest Lexicographic Substring of Length K

//? Problem:
//? Given s and integer k, find the lexicographically smallest substring of length k.

//? Example:

//? Input: s = "azbycxdwe", k = 2
//? Output: "az"

// rl.question("Enter String : ", (str) => {
//     rl.question("Enter K :", (k) => {
//         k = Number(k);
//         let l = 0;
//         let r = k - 1;
//         let subStringsArray = [];
//         while (r < str.length) {
//             let SubString = "";
//             for (let i = l; i <= r; i++) {
//                 SubString += str[i];
//             }
//             subStringsArray.push(SubString);
//             l++;
//             r++;
//         }
//         subStringsArray = subStringsArray.sort((a, b) => a.localeCompare(b));
//         console.log(`"${subStringsArray[0]}"`);
//         rl.close();
//     })
// })

//? 🔹 9. Substring with Equal Number of Vowels and Consonants in Each Window

//? Problem:
//? Given s and integer k, return all substrings of length k where vowels = consonants.

//?  Example:

//? Input: s = "abcdeiou", k = 4
//? Output: ["abci", "cdei"]

// rl.question("Enter String :", (str) => {
//     rl.question("Enter k : ", (k) => {
//         k = Number(k);
//         function countVowelsConsonants(subString) {
//             let vowels = "AEIOUaeiou";
//             let vowelsCount = 0;
//             let consonantsCount = 0;
//             for (let ch of subString) {
//                 if (!vowels.includes(ch)) {
//                     consonantsCount++;
//                 }
//                 else {
//                     vowelsCount++;
//                 }
//             }
//             if (vowelsCount === consonantsCount) {
//                 return true;
//             }
//             return false;
//         }
//         let l = 0;
//         let r = k - 1;
//         let output = [];
//         while (r < str.length) {
//             let subString = str.substring(l, r + 1);
//             if (countVowelsConsonants(subString)) {
//                 output.push(subString);
//             }
//             l++;
//             r++;
//         }
//         console.log(output);
//         rl.close();
//     })
// })


//? 🔹 10. First Repeating Character in Each Window of Size K

//? Problem:
//? For each substring of length k, return the first repeating character. If none, return -1.

//?  Example:

//? Input: s = "aabcdbc", k = 3
//? Output: ["a", "a", "b", "c", "b"]

rl.question("Enter String : ", (str) => {
    rl.question("Enter k : ", (k) => {
        k = Number(k);
        function FirstReatingCharacter(SubString) {
            for (let ch of SubString) {
                if (SubString.indexOf(ch) !== SubString.lastIndexOf(ch)) {
                    return ch;
                }
            }

            // let fq = {};
            // for (let ch of SubString) {
            //     if (fq[ch]) {
            //         return ch;
            //     }
            //     fq[ch] = 1;
            // }

            return -1;
        }
        let l = 0;
        let r = k - 1;
        let firstReatingCharacters = [];
        while (r < str.length) {
            let SubString = str.substring(l, r + 1);
            let ch = FirstReatingCharacter(SubString);
            firstReatingCharacters.push(ch);
            l++;
            r++;
        }
        console.log(firstReatingCharacters);
        rl.close();
    })
})

//? 🔹 11. Maximum Number of Consonants in Substring of Size K

//? Problem:
//? Find the substring of size k with the maximum number of consonants.

//? ✅ Example:

//? Input: s = "leetcode", k = 3
//? Output: 2
//? Explanation: "tcd" has 2 consonants.

//? 🔹 12. Count Substrings of Size K with At Least One Digit

//? Problem:
//? Given s and integer k, count how many substrings of length k contain at least one digit.

//? ✅ Example:

//? Input: s = "a1bc23d4", k = 3
//? Output: 5

