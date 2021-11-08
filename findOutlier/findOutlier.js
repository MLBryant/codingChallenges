const findOutlier = arr => {
    let evens = []
    let odds = []
    arr.forEach(elem => {
        if (elem % 2 === 0) {
            evens.push(elem)
        } else {
            odds.push(elem)
        }
    })
    if (evens.length > odds.length) {
        return odds[0]
    } else {
        return evens[0]
    }
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));