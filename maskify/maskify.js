const maskify = string => {
    maskified = '#'.repeat(string.length - 4) + string.slice(string.length - 4)
    return maskified
}

console.log(maskify('skippy'));