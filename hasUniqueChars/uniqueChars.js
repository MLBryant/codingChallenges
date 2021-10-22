function uniqueChars(string) {
    stringSplit = string.split('');
    stringSet = [...new Set(string)];
    if (stringSet.length === stringSplit.length) {
        return true;
    } else {
        return false;
    }
}

console.log(uniqueChars('super9876'));