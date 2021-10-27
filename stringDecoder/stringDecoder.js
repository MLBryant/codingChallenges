const decoder = code => {
    codeArr = code.split('');
    const decoded = codeArr.reduce((acc, cur, i, arr) => {
        if (!isNaN(cur)) {
            acc.push(codeArr[i + (+cur) + 1]);
        }
        return acc;
    }, []);
    return decoded.join('');
}

console.log(decoder('2bna0p1mp2osl0e'));