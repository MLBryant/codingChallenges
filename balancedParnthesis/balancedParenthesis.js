const parenthesis = string => {
    let openCount = 0;
    let closeCount = 0;

    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) === '(') {
            openCount++;
        } else if (string.charAt(i) === ')') {
            closeCount++;
        }
    }
    if (openCount === closeCount && openCount != 0) {
        return true;
    } else {
        return false;
    }
}

console.log(parenthesis("((There's a bonus open paren here.))"));