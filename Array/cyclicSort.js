function findSmallestMissingPositive(arr) {
    let n = arr.length;

    // Step 1: Place each number in its correct position if possible
    for (let i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[arr[i] - 1]) {
            let temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
        }
    }
    console.log(arr)
    // Step 2: Find the first missing positive number
    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }

    // If all numbers are in place, return n + 1
    return n + 1;
}

// Example usage:
let arr = [-3, 1, -1, 4, 0, -2, 2];
console.log(findSmallestMissingPositive(arr)); // Output: 1
