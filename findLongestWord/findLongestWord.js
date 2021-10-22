function findLongestWord(arr) {
    longestWord = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i]
        }
    }
    return longestWord.length;
}

console.log(findLongestWord(['hi', 'hello']));
console.log(findLongestWord(['Devmountain', 'Hackbright']));