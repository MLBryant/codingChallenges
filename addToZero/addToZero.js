function addToZero(arr) {
    for (let i = 0; i < arr.length -1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

console.log(addToZero([1, 4, 11, 2, 37, -4]));
console.log(addToZero([0, 21, 33, 6, 0, -9]));
console.log(addToZero([0, 1, 2, 3, 4, 5]));