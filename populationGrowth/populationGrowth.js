const nbYear = (p0, percent, aug, p) => {
    let i = 0
    let pop = p0
    for (i = 0; pop < p; i++) {
        pop = (pop * (percent / 100 + 1)) + aug
    }
    return i
}

console.log(nbYear(1500000, 2.5, 10000, 2000000));