function reverse(arr) {
    let n = arr.length
    let d = Math.floor(n / 2)
    // Loop to iterate to half the length of the array
    for (let i = 0; i < d; i++) {
        //swaping on each iteration
        [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
    }
}

let arr = [1, 2, 3, 4, 5, 6]
reverse(arr);
console.log(arr.join(" "))
//Expected Output: { 6 5 4 3 2 1}