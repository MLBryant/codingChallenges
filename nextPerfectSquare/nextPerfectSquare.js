const nextPerfectSquare = num => {
    if (Number.isInteger(Math.sqrt(num))) {
        return (Math.sqrt(num) + 1) ** 2
    } else {
        return -1
    }
}

console.log(nextPerfectSquare(289));