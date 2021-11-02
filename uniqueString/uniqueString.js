const uniqueString = string => {
    unique = '';
    for (i = 0; i < string.length; i++) {
        if (!unique.includes(string.charAt(i))) {
            unique += string.charAt(i);
        }
    }
    return unique;
}

console.log(uniqueString('iwanttoclimbamountain'));