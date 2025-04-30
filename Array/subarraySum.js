//Find maximum (or minimum) sum of a subarray of size k by brute force. 
// The time complexity of this solution is O(n*k).
function subArray(arr, k) {
    let n = arr.length;
    let max = -Infinity;
    for (let i = 0; i <= n - k; i++) {
        let current = 0
        for (let j = i; j < i + k; j++) {
            current += arr[j];
        }
        max = Math.max(max, current);
    }
    return max;
}

let arr = [3, 4, 7, 1, 8, 5, 1];
let size = 3
console.log(subArray(arr, size));
//Expected Output: 16
//Time Complexity: O(n2)
//Auxiliary Space: O(1)


// Sliding Window Technique. This approach is efficient and works in O(n) time complexity.
function maxSumSubarray(arr, k) {
    let n = arr.length;
    if (n < k) {
        console.log("Invalid input: Array size is smaller than k");
        return -1;
    }

    let windowSum = 0;
    let maxSum = 0;

    // Calculate the sum of the first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    // Slide the window
    for (let i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Example usage:
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;
console.log(maxSumSubarray(arr1, k)); // Output: 24
