//! Math / Number Problems

//? Reverse a Number
// Input: 12345 → Output: 54321

//todo Method-1

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// rl.question("Enter number:", (n) => {
//     let num = Number(n);
//     let og=num;
//     let rev = 0;
//     while (num > 0) {
//         rev = rev * 10 + (num % 10);
//         num = Math.floor(num / 10);
//     }
//     console.log(`Reverse of ${og} is ${rev}`);
//     rl.close();

// })

//todo Method-2

// rl.question("Enter number:", (n) => {
//     let num = Number(n);
//     let reverse = num.toString().split('').reverse().join('');
//     console.log(reverse)
//     rl.close();
// })



//?? Palindrome Number
// Input: 121 → Output: true, Input: 123 → Output: false

// rl.question("Enter number :", (n) => {
//     let num = Number(n);
//     let og = num;
//     let rev = 0;
//     while (num > 0) {
//         rev = rev * 10 + (num % 10);
//         num = Math.floor(num / 10);
//     }
//     if (rev === og) {
//         console.log(`True,${og} is a Palindrome.`);
//     }
//     else {
//         console.log("False.");
//     }
//     rl.close();
// })


//? Armstrong Number (n-digit)
// Input: 153 = 1³ + 5³ + 3³ → true
// Input: 9474 = 9⁴ + 4⁴ + 7⁴ + 4⁴ → true

//todo  without converting into string use formula
//todo length = Math.floor(Math.log10(num)) + 1

// rl.question("Entet number : ", (n) => {
//     let num = Number(n);
//     let og = num;
//     let length = num.toString().length;
//     let Armstrong = 0
//     while (num > 0) {
//         let digit = num % 10;
//         Armstrong += Math.pow(digit, length);
//         num = Math.floor(num / 10)

//     }
//     if (Armstrong === og) {
//         console.log(`${og} is Armstrong Number.`)
//     }
//     else {
//         console.log(`${og} is not Armstrong Number.`)

//     }
//     rl.close();
// })



//? Factorial of a Number
// Input: 5 → Output: 120

// rl.question("Enter number : ", (n) => {
//     let num = Number(n);
//     function factorial(num) {
//         let fact = 1;
//         for (let i = 1; i <= n; i++) {
//             fact = fact * i;
//         }
//         return fact;
//     }
//     console.log(factorial(num));
//     rl.close();
// })


//? Prime Number Check
// Input: 29 → Output: true


// rl.question("Enter number : ", (n) => {
//     let num = Number(n);
//     let isPrime = true;
//     if (num == 1) {
//         console.log("false");
//         rl.close();
//         return;
//     }
//     for (let i = 2; i <= n; i++) {
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j == 0) {
//                 isPrime = false;
//             }
//             else {
//                 isPrime = true;
//             }
//         }
//     }
//     if (isPrime == true) {
//         console.log(isPrime);
//     }
//     else {
//         console.log(isPrime);
//     }
//     rl.close();
// })

//? Fibonacci Series (first n terms)
// Input: n=6 → Output: 0 1 1 2 3 5

// rl.question("Enter number :", (n) => {
//     let num = Number(n);
//     let first = 0;
//     let second = 1;
//     let result = "";
//     for (let i = 0; i < n; i++) {
//         result += first + " ";
//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     console.log(result);
//     rl.close();
// })



//? 🔡 String + Array Problems

// Check if Two Strings are Anagrams (using freq count)
// Input: "listen", "silent" → true

// rl.question("Enter First string : ", (str1) => {
//     rl.question("Enter Second String : ", (str2) => {

// function checkAnagrams(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     return (str1.split('').sort().join('') === str2.split('').sort().join(''))
// }

//         function checkAnagrams(str1, str2) {
//             if (str1.length !== str2.length) return false;

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

//         console.log(`is Anagrams : ${checkAnagrams(str1, str2)} `)
//         rl.close();
//     });
// });



//? Remove Duplicates from String
// Input: "programming" → Output: "progamin"

// rl.question("Enter string : ", (str) => {

// function removingDuplicates(str) {
//     return [...new Set(str)].join('');
// }

//     function removingDuplicates(str) {
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
//     console.log(removingDuplicates(str));
//     rl.close();
// })

//? Count Frequency of Characters in String
// Input: "success" → Output: {s:3, u:1, c:2, e:1}

// rl.question("Enter string : ", (str) => {
//     function countFrequency(str) {
//         let fq = {};
//         for (let ch of str) {
//             fq[ch] = (fq[ch] || 0) + 1;
//         }
//         return fq;
//     }
//     console.log(countFrequency(str));
//     rl.close();
// })

//? Find the Longest Word in a Sentence
// Input: "I love learning JavaScript" → Output: "JavaScript"

// rl.question("Enter String :", (str) => {
//     function longestWords(str) {
//         let words = str.split(" ");
//         let longest = "";
//         for (let word of words) {
//             if (word.length > longest.length) {
//                 longest = word;
//             }
//         }
//         return longest;
//     }
//     console.log(longestWords(str));
//     rl.close();
// })

//! Check if Sentence is a Palindrome (ignoring spaces & case)
// Input: "Never odd or even" → Output: true

// rl.question("Enter string : ", (str) => {
//     function palindrome(str) {
//         let str1 = str.split(" ").join("");
//         str1 = str1.toLowerCase();
//         // let ispalindrome = true;
//         let reverse = "";
//         for (let i = str1.length - 1; i >= 0; i--) {
//             reverse += str1[i];
//         }
//         // console.log(reverse);
//         // console.log(str1);
//         // if (reverse.toLowerCase() === str1.toLowerCase()) {
//         //     ispalindrome = true;
//         // }
//         // else {
//         //     ispalindrome = false;
//         // }
//         // return ispalindrome;
//         return str1 === reverse;
//     }
//     console.log(palindrome(str));
//     rl.close();
// })



//! Reverse Words in a Sentence
// Input: "I love JS" → Output: "JS love I"

// rl.question("Enter string : ", (str) => {
//     function reversewords(str) {
//         let str1 = str.split(" ");
//         let reverse = [];
//         for (let i = str1.length - 1; i >= 0; i--) {
//             reverse.push(str1[i]);
//         }
//         return reverse.join(" ");
//     }
//     console.log(reversewords(str))
//     rl.close();
// })


// 🧩 Mixed Problems (Good for interviews)

//? Second Largest Number in Array (without sorting)
// Input: [10, 20, 4, 45, 99] → Output: 45

// rl.question("Enter array :", (elements) => {
//     let arr = elements.split(' ').map(Number)
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log(`Max is ${max}.`);
//     rl.close();
// })

//? Find Missing Number in Array (1 to n)
// Input: [1,2,4,5,6] → Output: 3

// rl.question("Enter array : ", (elements) => {
//     let arr = elements.split(" ").map(Number);
//     rl.question("Enter n :", (n) => {
//         let num = Number(n);
//         let expectedsum = (num * (num + 1)) / 2;
//         let actualsum = arr.reduce((a, b) => a + b);
//         let missingNumber = expectedsum - actualsum;
//         console.log(missingNumber);
//         rl.close();
//     });
// });

//? Sum of Digits of a Number
// Input: 1234 → Output: 10

// rl.question("Enter Number : ", (n) => {
//     let num = Number(n);
//     let sum = 0;
//     while (num > 0) {
//         let digit = num % 10;
//         sum += digit;
//         num = Math.floor(num / 10)
//     }
//     console.log(`Sum of number is ${sum}.`);
//     rl.close();
// })


//? Check if Array Elements Form a Palindrome
// Input: [1,2,3,2,1] → Output: true

// rl.question("Enter array : ", (elements) => {
//     let arr = elements.split(' ').map(Number);
//     let ogArray = arr.slice();
//     let reversedArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArray.push(arr[i]);
//     }
//     if (ogArray.join('') == reversedArray.join('')) {
//         console.log("Palindrome");
//     }
//     else {
//         console.log("Not Palindrome.");
//     }
//     rl.close();
// })

//todo write this in function
//for(let i=0;i<ogArray.length;i++){
//      if(arr1[i] !==arr2[i]){
//      return false;
//}
//   return true ;
// }

//! Reverse Only Vowels in a String (uaing two pointer method)
// Input: "hello" → Output: "holle"

rl.question("Enter string :", (str) => {

    function reverseVowels(str) {
        let Vowels = "aeiouAEIOU";
        let arr = str.split("");
        let i = 0;
        let j = arr.length - 1;

        while (i < j) {
            if (!Vowels.includes(arr[i])) {
                i++;
                continue;
            }
            if (!Vowels.includes(arr[j])) {
                j--;
                continue;
            }
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--; 
        }
        return arr.join("");
    }
    console.log(reverseVowels(str));
    rl.close();
});