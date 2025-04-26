function minElement(arr) {
    let min = Infinity;  //Assumes the min element as Infinity
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let arr = [8, 3, 4, 2, 7, 6];
console.log(minElement(arr))
//expected Output: 2


function maxElement(arr) {
    let max = -Infinity;  //Assumes the min element as Infinity
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let arr1 = [1, 3, 4, 2, 7, 6];
console.log(maxElement(arr1));
//expected Output: 7