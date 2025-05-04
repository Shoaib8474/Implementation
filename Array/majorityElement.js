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
function findMajorityElement(arr) {
    // Step 1: Sort the array
    arr.sort((a, b) => a - b);

    let count = 1;
    let majorityElement = null;
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        } else {
            // Step 3 & 4: Check if previous element's count exceeds half of total elements
            if (count > n / 2) {
                majorityElement = arr[i - 1];
                break;
            }
            count = 1; // Reset count for new element
        }
    }

    // Check last element after loop
    if (count > n / 2) {
        majorityElement = arr[n - 1];
    }

    return majorityElement !== null ? majorityElement : "No majority element found";
}

// Example usage:
let arr1 = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(findMajorityElement(arr1)); // Output: 4



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

//Using Moore’s Voting Algorithm- O(n) Time and O(1) Space
function findMajorityElement(nums) {
    // First phase: Find a candidate
    let count = 0;
    let candidate = null;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    
    // Second phase: Verify the candidate
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }
    
    return count > nums.length / 2 ? candidate : null;
}

// Example usage
const array = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(array);
console.log("Majority element is:", majorityElement); // Output: 2