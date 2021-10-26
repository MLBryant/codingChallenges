const best = arr  => {
    maxDifference = 0;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (maxDifference < arr[j] - arr[i]) {
                maxDifference = arr[j] - arr[i];
            }
        }
    }
    return maxDifference
};

console.log(best([2, 3, 10, 6, 4, 8, 1]));