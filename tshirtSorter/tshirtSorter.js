const shirtSorter = string => {
    let ess = '';
    let emm = '';
    let ell = '';
    for(i = 0; i < string.length; i++) {
        if (string[i] === 's') {
            ess += 's';
        } else if (string[i] === 'm') {
            emm += 'm';
        } else if (string[i] === 'l') {
            ell += 'l'
        }
    }
    return ess + emm + ell
}

console.log(shirtSorter('slsmmsllsmsmlmsls'));