//https://www.geeksforgeeks.org/majority-element/
//Majority Element
// [Naive Approach] Using Two Nested Loops – O(n^2) Time and O(1) Space
// [Better Approach 1] Using Sorting – O(n log n) Time and O(1) Space
// [Better Approach 2] Using Hashing – O(n) Time and O(n) Space
// [Expected Approach] Using Moore’s Voting Algorithm- O(n) Time and O(1) Space


// Javascript program to find Majority
// element in an array using nested loops

// Function to find the Majority element in an array
function majorityElement(arr) {
    let n = arr.length;  

    // Loop to consider each element as a candidate for majority
    for (let i = 0; i < n; i++) {
        let count = 0;

        // Inner loop to count the frequency of arr[i]
        for (let j = 0; j < n; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        // Check if count of arr[i] is more than half the size of the array
        if (count > n / 2) {
            return arr[i];
        }
    }

    // If no majority element found, return -1
    return -1;
}

// Driver Code 
let arr = [1, 1, 2, 1, 3, 5, 1];
console.log(majorityElement(arr));

// Function to find Majority element in an array
// it returns -1 if there is no majority element
function majorityElement(arr) {
    let n = arr.length;
    arr.sort((a, b) => a - b);

    let candidate = arr[Math.floor(n / 2)];

    let count = 0;
    for (let num of arr) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > Math.floor(n / 2)) {
        return candidate;
    } else {
        return -1;
    }
}


// Driver Code 
let arr1 = [1, 1, 2, 1, 3, 5, 1];
console.log(majorityElement(arr1));


// Javascript program to find Majority
// element in an array using hashmap

// Function to find Majority element in an array
// It returns -1 if there is no majority element
function majorityElement(arr) {
    const n = arr.length;
    const countMap = new Map();

    // Traverse the array and count occurrences using the hash map
    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
        
        // Check if current element count exceeds n / 2
        if (countMap.get(num) > n / 2) {
            return num;
        }
    }

    // If no majority element is found, return -1
    return -1;
}

// Driver Code
const arr2 = [1, 1, 2, 1, 3, 5, 1];
console.log(majorityElement(arr2));