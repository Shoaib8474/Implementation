//Find duplicates in O(n) time and O(n) extra space in an array
// using hashmap
function findDuplicates(arr) {

    // Step 1: Create an empty object to store 
    // element frequencies
    const freqMap = {};
    const result = [];

    // Step 2: Iterate through the array and 
    // count element frequencies
    for (let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // Step 3: Iterate through the object to find duplicates
    for (let key in freqMap) {
        if (freqMap[key] > 1) {
            result.push(parseInt(key));
        }
    }

    // Step 4: If no duplicates found, add -1 to the result
    if (result.length === 0) {
        result.push(-1);
    }

    // Step 6: Return the result array containing 
    // duplicate elements or -1
    return result;
}

// Driver code
const arr = [1, 6];
const duplicates = findDuplicates(arr);
console.log(duplicates.join(' '));