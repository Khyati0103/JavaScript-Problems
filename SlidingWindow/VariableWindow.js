
const { kMaxLength } = require('buffer');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//!  1. Longest Subarray with Sum ≤ K

//! Question:
//! Given an array of positive integers and an integer k, find the length of the longest subarray whose sum is less than or equal to k.

//! Example:
//! Input: arr = [2,1,3,4,1,1,2], k = 7
//! Output: 4
//! (Explanation: Subarray [3,4] is sum=7, length=2. But [2,1,3,1] sum=7, length=4 → maximum length=4)

// rl.question("Enter array : ", (elements) => {
//     arr = elements.split(" ").map(Number);
//     rl.question("Enter k : ", (k) => {
//         k = Number(k)
//         let l = 0;
//         let r = 0;
//         let maxlength = 0;
//         let sum = 0;
//         let bestSubstring = []
//         while (r < arr.length) {
//             sum = sum + arr[r];
//             if (sum > k && l <= r) {
//                 sum = sum - arr[l];
//                 l++;
//             }
//             let windowlength = r - l + 1;
//             if (windowlength > maxlength) {
//                 maxlength = windowlength;
//                 bestSubstring = [arr.slice(l, r + 1)];
//             }
//             r++;
//         }
//         console.log(`Maxlength of Substring is : ${maxlength} \n ${bestSubstring}`);
//         rl.close();
//     });
// });




//! 🔹 2. Longest Subarray with Sum = K

//! Question:
//! Given an array of integers and an integer k, find the length of the longest subarray whose sum is exactly k.

//! Example:
//! Input: arr = [1,2,3,1,1,1,1,2], k = 6
//! Output: 5
//! (Explanation: Subarray [1,1,1,1,2] has sum=6 and length=5, but [2,3,1] also works with sum=6 and length=3. The longest is 5.)


// rl.question("Enter Array :", (elements) => {
//     arr = elements.split(" ").map(Number);
//     rl.question("Enter K :", (k) => {
//         k = Number(k);
//         let l = 0;
//         let r = 0;
//         maxlength = 0;
//         let sum = 0;
//         let output = [];
//         while (r < arr.length) {
//             sum += arr[r];
//             while (sum > k && l <= r) {
//                 sum -= arr[l];
//                 l++;
//             }
//             if (sum === k) {
//                 let windowlength = r - l + 1;
//                 if (windowlength > maxlength) {
//                     maxlength = windowlength;
//                     output = [arr.slice(l, r + 1)];
//                 }
//             }
//             r++;
//         };
//         console.log(maxlength, "\n", output);
//         rl.close();
//     });
// });




//!  3. Longest Subarray with At Most K Distinct Integers

//! Question:
//! Given an array arr and an integer k, return the length of the longest subarray that contains at most k distinct integers.

//! Example:
//! Input: arr = [1,2,1,2,3], k = 2
//! Output: 4
//! (Explanation: [1,2,1,2] has only 2 distinct numbers → length=4)

// rl.question("Enter array :", (elements) => {
//     arr = elements.split(" ").map(Number);
//     rl.question("Enter K : ", (k) => {
//         k = Number(k);
//         let r = 0;
//         let l = 0;
//         let subAraay = [];
//         let maxlength = 0;
//         let fq = new Map();
//         while (r < arr.length) {
//             //Add curent element in map and count its frequency
//             fq.set(arr[r], (fq.get(arr[r]) || 0) + 1)

//             // if distinct elements > k
//             while (fq.size > k) {
//                 fq.set(arr[l], fq.get(arr[l]) - 1);
//                 if (fq.get(arr[l]) === 0) {
//                     fq.delete(arr[l]);
//                 }
//                 l++;
//             }
//             let windowlength = r - l + 1;
//             if (windowlength > maxlength) {
//                 maxlength = windowlength;
//                 subAraay = [arr.slice(l, r + 1)];
//             }
//             r++;
//         }
//         console.log(maxlength, "\n", subAraay);
//         rl.close();
//     })
// })


//!  6. Longest Subarray of 1s After Replacing at Most K 0s

//! Question:
//! Given a binary array and an integer k, you can flip at most k zeros. Find the length of the longest contiguous subarray containing only 1s.

//! Example:
//! Input: arr = [1,1,0,0,1,1,1,0,1], k = 2
//! Output: 7
//! (Explanation: Flip 2 zeros → [1,1,1,1,1,1,1], length=7)

// rl.question("Enter array :", (elements) => {
//     arr = elements.split(" ").map(Number);
//     rl.question("Enter k : ", (k) => {
//         k = Number(k);
//         let l = 0;
//         let r = 0;
//         let maxlength = 0;
//         let output = [];
//         let zerosCount = 0;

//         while (r < arr.length) {
//             if (arr[r] === 0) {
//                 zerosCount++;
//             }
//             if (zerosCount > k) {
//                 if (arr[l] === 0) {
//                     zerosCount--;
//                 }
//                 l++;
//             }
//             let windowlength = r - l + 1;
//             if (windowlength > maxlength) {
//                 maxlength = windowlength;
//                 output = arr.slice(l, r + 1);
//             }
//             r++;
//         }

//         for (let i = 0; i < output.length; i++) {
//             if (output[i] === 0) output[i] = 1;
//         }

//         console.log(maxlength, "\n", output);
//         rl.close();

//     })
// })

//!  7. Maximum Erasure Value (Unique Subarray Sum)

//! Question:
//! Given an array of positive integers, find the maximum sum of a subarray with all unique elements.

//! Example:
//! Input: arr = [4,2,4,5,6]
//! Output: 17
//! (Explanation: Subarray [2,4,5,6] has sum=17, maximum possible)

// rl.question("Enter array : ", (elements) => {
//     arr = elements.split(" ").map(Number);

//     let l = 0;
//     let r = 0;
//     let maxsum = 0;
//     let sum = 0;
//     let bestSubstring = []
//     let fq = new Map();
//     while (r < arr.length) {
//         fq.set(arr[r], (fq.get(arr[r]) || 0) + 1);
//         sum = sum + arr[r];

//         if (fq.get(arr[r]) > 1) {
//             sum -= arr[l];
//             fq.set(arr[l], fq.get(arr[l]) - 1);
//             l++;
//         }


//         if (sum > maxsum) {
//             maxsum = sum;
//             bestSubstring = arr.slice(l, r + 1);

//         }

//         r++;
//     }
//     console.log(`Maxlength of Substring is : ${maxsum} \n `, bestSubstring);
//     rl.close();
// });


//!  8. Longest Subarray with Equal Number of 0s and 1s

//! Question:
//! Given a binary array, find the length of the longest subarray with equal number of 0s and 1s.

//! Example:
//! Input: arr = [0,1,0,1,1,1,0]
//! Output: 6
//! (Explanation: [0,1,0,1,1,1] or [1,0,1,1,1,0] both valid, length=6)






//!  10. Longest Subarray with Product ≤ K

//! Question:
//! Given an array of positive integers and integer k, find the length of the longest subarray such that the product of all elements ≤ k.

//! Example:
//! Input: arr = [10, 5, 2, 6], k = 100
//! Output: 3
//! (Explanation: Subarray [5,2,6] product=60 ≤ 100, length=3)

// rl.question("Enter array : ", (elements) => {
//     arr = elements.split(" ").map(Number);
//     rl.question("Enter k : ", (k) => {
//         k = Number(k)
//         let l = 0;
//         let r = 0;
//         let maxlength = 0;
//         let product = 1;
//         let bestSubstring = []
//         while (r < arr.length) {
//             product = product * arr[r];
//             if (product > k && l <= r) {
//                 product = product / arr[l];
//                 l++;
//             }
//             let windowlength = r - l + 1;
//             if (windowlength > maxlength) {
//                 maxlength = windowlength;
//                 bestSubstring = arr.slice(l, r + 1);
//             }
//             r++;
//         }
//         console.log(`Maxlength of Substring is : ${maxlength} \n `, bestSubstring);
//         rl.close();
//     });
// });


//! Absolutely! Let's focus on variable-size sliding window problems for strings, with clear examples for practice. These are slightly different from arrays but use the same idea.

//!  1. Longest Substring Without Repeating Characters

//! Problem:
//! Find the length of the longest substring where all characters are unique.

//! Example:
//! Input: s = "abcabcbb"
//! Output: 3 → "abc"
//! Input: s = "bbbbb"
//! Output: 1 → "b"

// rl.question("Enter String :", (str) => {
//     let l = 0, r = 0;
//     let maxlength = 0;
//     let fq = new Map();
//     let output = "";
//     while (r < str.length) {
//         fq.set(str[r], (fq.get(str[r]) || 0) + 1);
//         console.log(fq);

//         while (fq.get(str[r]) > 1) {
//             fq.set(str[l], fq.get(str[l]) - 1);
//             if (fq.get(str[l]) === 0) {
//                 fq.delete(str[l]);
//             }
//             l++;
//         }
//         let windowlength = r - l + 1;
//         if (windowlength > maxlength) {
//             maxlength = windowlength;
//             output = str.substring(l, r + 1);
//         }
//         r++;
//     }
//     console.log(maxlength, "\n", output);
//     rl.close();
// })


//! 2. Longest Substring with At Most K Distinct Characters  (unique character <= k )

//! Problem:
//! Find the length of the longest substring that contains at most k distinct characters.

//! Example:
//! Input: s = "eceba", k = 2
//! Output: 3 → "ece"

//! Input: s = "aaabbc", k = 2
//! Output: 5 → "aaabb"


//todo    here imp is substring should only contain  mostly two unique characters not more than that
//todo   so the size is only <=2 of fq

// rl.question("Enter String :",(str)=>{
//     rl.question("Enter k :",(k)=>{
//         k=Number(k);
//         let l=0,r=0;
//         let maxlength=0;
//         let output="";
//         let fq=new Map();
//         while(r<str.length){
//             fq.set(str[r],(fq.get(str[r]) || 0) + 1);
//             console.log(fq);

//             while(fq.size > k){
//                 fq.set(str[l],fq.get(str[l]) - 1);
//                 if(fq.get(str[l]) === 0){
//                     fq.delete(str[l]);
//                 }
//                 l++;
//             }
//             let windowlength=r-l+1;
//             if(windowlength > maxlength){
//                 maxlength=windowlength;
//                 output=str.substring(l,r+1);
//             }
//             r++;
//         }
//         console.log(maxlength,"\n",output);
//         rl.close();
//     })
// })



//!  3. Longest Substring with Exactly K Distinct Characters  (unique character = k )
//! Problem:
//! Find the length of the longest substring containing exactly k distinct characters.

//! Example:
//! Input: s = "aabacbebebe", k = 3
//! Output: 7 → "cbebebe"

//! Input: s = "abcabc", k = 2
//! Output: 2 → "ab" or "bc"

// rl.question("Enter String :", (str) => {
//     rl.question("Enter k : ", (k) => {
//         k = Number(k);
//         let l = 0, r = 0, maxlength = 0;
//         let output = [];
//         let fq = new Map();
//         while (r < str.length) {
//             fq.set(str[r], (fq.get(str[r]) || 0) + 1);

//             while (fq.size > k) {
//                 fq.set(str[l], fq.get(str[l]) - 1);
//                 if (fq.get(str[l]) === 0) {
//                     fq.delete(str[l]);
//                 }
//                 l++;
//             }
//             if (fq.size === k) {
//                 let windowlength = r - l + 1;
//                 if (windowlength > maxlength) {
//                     maxlength = windowlength;
//                     output = str.substring(l, r + 1);
//                 }
//             }
//             r++;

//         }
//         console.log(maxlength,"\n",output);
//         rl.close();
//     })
// })

//!  4. Longest Substring with Same Letter After K Replacements

//! Problem:
//! Given s and integer k, replace at most k letters to make the substring have all same letters. Find the length of the longest such substring.

//! Example:
//! Input: s = "AABABBA", k = 1
//! Output: 4 → "AABA" or "ABBB"

// rl.question("Enter String :", (str) => {
//     rl.question("Enter k : ", (k) => {
//         k = Number(k);
//         let l = 0, r = 0, maxlength = 0, maxfq = 0;
//         let output = "";
//         let fq = {};
//         while (r < str.length) {
//             let ch = str[r];
//             fq[ch] = (fq[ch] || 0) + 1;
//             maxfq = Math.max(maxfq, fq[ch]);

//             while ((r - l + 1) - maxfq > k) {
//                 fq[str[l]]--;
//                 l++;
//             }
//             if (r - l + 1 > maxlength) {
//                 maxlength = r - l + 1;
//                 output = str.substring(l, r + 1);
//             }
//             r++;
//         }
//         console.log(maxlength, "\n", output);
//         rl.close();
//     });
// });



//! 5. Longest Substring with Vowels Only

//! Problem:
//! Find the longest substring containing only vowels.

//! Example:
//! Input: s = "leetcode"
//! Output: 2 → "ee"

//! Input: s = "aeiouu"
//! Output: 6 → "aeiouu"

// rl.question("Enter String :", (str) => {
//     let vowels = "AEIOUaeiou";
//     let l = 0, r = 0, maxlength = 0;
//     let output = "";
//     while (r < str.length) {
//         if (vowels.includes(str[r])) {
//             let windowlength = r - l + 1;
//             if (windowlength > maxlength) {
//                 maxlength = windowlength;
//                 output = str.substring(l, r + 1);
//             }
//         }
//         else {
//             l = r + 1;
//         }

//         r++;
//     }
//     console.log(maxlength, "\n", output);
//     rl.close();
// })


//!  6. Longest Substring with At Most K Repeating Characters   <=k

//! Problem:
//! Find the longest substring where each character appears at most k times.

//! Example:
//! Input: s = "aaabbcc", k = 2
//! Output: 5 → "aabbc"

//! Input: s = "aabbcc", k = 1
//! Output: 3 → "abc"

// rl.question("Enter String :", (str) => {
//     rl.question("Enter k : ", (k) => {
//         let l = 0, r = 0, maxlength = 0;
//         let output = "";
//         let fq = new Map();
//         while (r < str.length) {
//             fq.set(str[r], (fq.get(str[r]) || 0) + 1);

//             while (fq.get(str[r]) > k) {
//                 fq.set(str[l], fq.get(str[l]) - 1);
//                 if (fq.get(str[l]) === 0) {
//                     fq.delete(str[l]);
//                 }
//                 l++;
//             }
//             let windowlength = r - l + 1;
//             if (windowlength > maxlength) {
//                 maxlength = windowlength;
//                 output = str.substring(l, r + 1);
//             }
//             r++;
//         }
//         console.log(maxlength, "\n", output);
//         rl.close();
//     })
// })


//!  7. Longest Substring with Equal Number of Vowels and Consonants

//! Problem:
//! Find the longest substring where the number of vowels equals the number of consonants.

//! Example:
//! Input: s = "abcdeiou"
//! Output: 4 → "cdei" (2 vowels, 2 consonants)

//! Input: s = "aeiobcdf"
//! Output: 6 → "eiobcd"


// rl.question("Enter String :", (str) => {
//     let maxlength = 0;
//     let output = "";
//     let vowels = "AEIOUaeiou";
//     for (let l = 0; l < str.length; l++) {
//         let vowelCount = 0, ConsonantCount = 0;
//         for (let r = l; r < str.length; r++) {
//             if (vowels.includes(str[r])) {
//                 vowelCount++;
//             }
//             else {
//                 ConsonantCount++;
//             }
//             if (vowelCount === ConsonantCount) {
//                 let windowlength = r - l + 1;
//                 if (windowlength > maxlength) {
//                     maxlength = windowlength;
//                     output = str.substring(l, r + 1);
//                 }
//             }
//         }
//     }
//     console.log(maxlength, "\n", output);
//     rl.close();
// })



//!  8. Longest Palindromic Substring

//! Problem:
//! Find the longest substring which is a palindrome.

//! Example:
//! Input: s = "babad"
//! Output: "bab" or "aba"

//! Input: s = "cbbd"
//! Output: "bb"

// rl.question("Enter String :", (str) => {
//     let l = 0, maxlength = 0;
//     let output = "";

//     // Helper function to expand around center
//     function expandAroundCenter(s, left, right) {
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             left--;
//             right++;
//         }
//         return right - left - 1;
//     }

//     for (let i = 0; i < str.length; i++) {
//         let len1 = expandAroundCenter(str, i, i); // Odd length palindrome
//         let len2 = expandAroundCenter(str, i, i + 1); // Even length palindrome
//         let len = Math.max(len1, len2);
//         if (len > maxlength) {
//             maxlength = len;
//             l = i - Math.floor((len - 1) / 2);
//             output = str.substring(l, l + maxlength);
//         }
//     }

//     console.log(output);
//     rl.close();
// })



// rl.question("Enter String :", (str) => {
//     let maxlength = 0;
//     let output = "";
//     for (let l = 0; l < str.length; l++) {
//         let subString = "";
//         for (let r = l; r < str.length; r++) {
//             subString = str.substring(l, r + 1);
//             let revstring = subString.split("").reverse().join("");
//             if (revstring === subString) {
//                 let windowlength = r - l + 1;
//                 if (windowlength > maxlength) {
//                     maxlength = windowlength;
//                     output = str.substring(l, r + 1);
//                 }
//             }
//         }
//     }
//     console.log(maxlength, "\n", output);
//     rl.close();
// })


//! 🔹 9. Longest Substring with At Most K Distinct Vowels   <=k

//! Problem:
//! Find the longest substring containing at most k distinct vowels.

//! Example:
//! Input: s = "aeiouaeioubcdf", k = 2
//! Output: "aeioua"






//! 🔹 10. Longest Substring Without Forbidden Characters

//! Problem:
//! Given a string and a set of forbidden characters, find the length of the longest substring that does not contain any forbidden character.

//! Example:
//! Input: s = "abcde", forbidden = ['b', 'd']
//! Output: 1 → "a" or "c" or "e"






//!  6. Longest Substring with Exactly K Distinct Characters (Problem of Variable window)

//! Problem:
//! Given a string s and integer k, find the length of the longest substring that contains exactly k distinct characters.

//!  Example:

//! Input: s = "aabacbebebe", k = 3
//! Output: 7
//! Explanation: "cbebebe" has length 7 with 3 distinct characters.


