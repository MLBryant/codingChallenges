const isPalindrome = string => {
    stringArr = string.split('');
    reversedArr = stringArr.slice(0).reverse();
    console.log(stringArr, reversedArr);
    if (stringArr.join('') === reversedArr.join('')) {
        return true;
    }
    return false;
}

console.log(isPalindrome('racecar'));