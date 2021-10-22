let arr = [1, 4, 11, 2, 37, -4];
let min = 99999;
let max = -99999;

for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    } else if (max < arr[i]) {
        max = arr[i]
    }
}

console.log(min, max);