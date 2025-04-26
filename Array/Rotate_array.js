//Q. JavaScript Program to left rotate the array by d positions

//1. Navive approch [O(n*d) & O(1)]
// Function to left rotate array by d positions
function rotateArr(arr, d) {
    let n = arr.length;
    d %= n;
    // Loop rotate the array to left by d positions
    for (let i = 0; i < d; i++) {
        //loop shift the array towards left by one
        let first = arr[0];
        for (let j = 0; j < n - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[n - 1] = first;
    }
}

let arr = [1, 2, 3, 4, 5, 6];
let d = 9; // towards left by d positions
rotateArr(arr, d);
// console.log(arr.join(" "));
//Expected Output
//Output: {3, 4, 5, 6, 1, 2}
//Explanation: After first left rotation, arr[] becomes {2, 3, 4, 5, 6, 1}
// and after the second rotation, arr[] becomes {3, 4, 5, 6, 1, 2}


//2. Better approch [O(n) & O(n)]
// Function to left rotate array by k positions
function rotateArr1(arr, k) {
    let n = arr.length;
    k %= n;

    // Storing rotated version of array
    let temp = new Array(n);

    // Loop to copy last (n - k) elements to the front of temp
    for (let i = 0; i < n - k; i++) {
        temp[i] = arr[i + k];
    }

    //Loop to copy the first d elements to the back of temp
    for (let j = 0; j < k; j++) {
        temp[n - k + j] = arr[j];
    }

    // Copying the elements of temp in arr
    // to get the final rotated array
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
}
let arr1 = [1, 2, 3, 4, 5, 6];
let k = 2;
rotateArr1(arr1, k);
// console.log(arr1.join(" "));
//Expected Output: { 3 4 5 6 1 2 }


//Expected Approach] Using Reversal Algorithm – O(n) Time and O(1) Space
function reverseArr2(arr, c) {
    let n = arr.length
    c %= n;

    reverse(arr, 0, c - 1);
    reverse(arr, c, n - 1);
    reverse(arr, 0, n - 1);
}

function reverse(arr, start, end) {
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

let arr2 = [1, 2, 3, 4, 5, 6];
let c = 2;
reverseArr2(arr2, c)
console.log(arr2.join(" "));
//Expected Output: { 3 4 5 6 1 2 }
//Reverse the subarray containing the first d elements of the array. { 2, 1,  3, 4, 5, 6}
//Reverse the subarray containing the last (n – d) elements of the array. {2, 1,  6, 5, 4, 3}
//Finally, reverse all the elements of the array. { 3 4 5 6 1 2 }