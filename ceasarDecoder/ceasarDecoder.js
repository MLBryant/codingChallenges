const ceasarDecoder = string => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    codedWord = string.split('');
    code = 0;
    decoded = [];

    for (i = 0; i < codedWord.length; i++) {
        if(isNaN(codedWord[i])) {
            decoded.push(alphabet[alphabet.indexOf(codedWord[i]) + code])
        } else {
            code = +codedWord[i]
        }
    }
    decodedWord = decoded.join('');
    return decodedWord;
}

console.log(ceasarDecoder("2fcjjm"));