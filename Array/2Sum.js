// Function to check whether any pair exists  whose sum is equal to the given target value
function twoSum(arr, target) {

    // Create a Hash Set to store the elements
    let set = new Set();

    // Iterate through each element in the array
    for (let num of arr) {
    
        // Calculate the complement that added to
        // num, equals the target
        let complement = target - num;

        // Check if the complement exists in the set
        if (set.has(complement)) {
            return [complement, num];
        }

        // Add the current element to the set
        set.add(num);
    }
    // If no pair is found
    return [];
}

// let arr = [0, -1, 2, -3, 1];
let arr = [3, 4, 7, 1, 8, 5];
let target = -2;

// Call the twoSum function and print the result
console.log(twoSum(arr, target).join(" "));
