//Sort even numbers in order and then odd in descending in an array

// Using Two Auxiliary Arrays – O(n*log(n)) Time and O(n) Space
// The idea is to first separate all odd and even numbers into two different arrays. 
// Then, we sort the odd numbers in descending order and the even numbers in ascending order. 
// Finally, we reconstruct the original array by placing all sorted odd numbers first, 
// followed by the sorted even numbers.

function separate(array) {
    let even = []
    let odd = []
    for (let index = 0; index < array.length; index++) {
         if (arr[index] % 2 === 0) {
            even.push(arr[index]);
         } else {
            odd.push(arr[index]);
         }
        
    }
    even.sort((a, b) => a - b);
    odd.sort((a, b) => b - a);
    console.log(even, " || ", odd)
    let pointer = 0;
    for (let index = 0; index < odd.length; index++) {
          array[pointer++] = odd[index];
    }
    for (let index = 0; index < even.length; index++) {
        array[pointer++] = even[index];
    }
    return array;
}

let arr = [1, 2, 3, 5, 4, 7, 10];
// console.log(separate(arr).join(" "));

function sortIt(arr) {
    // Separate odds and evens
    let odds = arr.filter(num => num % 2 === 1).sort((a, b) => b - a);
    let evens = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);

    // Merge sorted arrays
    return [...odds, ...evens];
}

// Driver code
let array = [1, 2, 3, 5, 4, 7, 10];
console.log(sortIt(array));
