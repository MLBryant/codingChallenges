const complementaryDna = strand => {
    const key = 'ATGC'
    const compKey = 'TACG'
    let compStrand = ''
    for (i = 0; i < strand.length; i++) {
        compStrand += compKey[key.indexOf(strand[i])]
    }
    return compStrand
}

console.log(complementaryDna("ATTGC"));