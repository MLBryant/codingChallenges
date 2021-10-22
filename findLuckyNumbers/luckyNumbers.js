function luckyNumbers(n) {
    let arr = [];

    for (let i = 0; i < n && i < 10; i++) {
        let y = Math.floor(Math.random() * 10) + 1;

        if (arr.includes(y) === false) {
            arr.push(y);
        } else {
            --i;
        }
    }
    return arr;
}

console.log(luckyNumbers(7));