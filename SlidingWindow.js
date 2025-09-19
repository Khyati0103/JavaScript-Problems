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



//? 4. Max of Each Subarray of Size K

//? Description:
//? Given an array, find the maximum element of each contiguous subarray of size k.

//? Example:

//? Input: arr = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
//? Output: [3, 3, 5, 5, 6, 7]


//? Hint:

//? This is slightly trickier: usually solved with a deque for O(n) time.

//? 5. First Negative Number in Every Window of Size K

//? Description:
//? For each window of size k, find the first negative number. If no negative number exists, output 0.

//? Example:

//? Input: arr = [12, -1, -7, 8, -15, 30, 16, 28], k = 3
//? Output: [-1, -1, -7, -15, -15, 0]

