const romanNumerals = num => {
    let romanNumeral = ''
    const key = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1 
    }
    for (value in key) {
        while (num >= key[value]) {
            romanNumeral += value
            num -= key[value]            
        }
    }
    return romanNumeral
}

console.log(romanNumerals(42));