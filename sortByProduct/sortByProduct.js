const sortByProduct = arr => {
    let sorted = arr.slice(0, arr.length)
    for (i = 0; i < sorted.length; i++) {
        for (j = i + 1; j < sorted.length; j++) {
            if ((sorted[j] * (arr.indexOf(sorted[j]) + 1)) < (sorted[i] * (arr.indexOf(sorted[i]) + 1))) {
                [sorted[i], sorted[j]] = [sorted[j], sorted[i]]
            }
        }
    }
    return sorted
}

console.log(sortByProduct([23, 2, 3, 4, 5]));

const sortByProduct2 = arr => {
    arr.sort((a, b) => (a * (arr.indexOf(a) +1)) - (b * (arr.indexOf(b) + 1)))
    return arr
}

console.log((sortByProduct2([23, 2, 3, 4, 5])));