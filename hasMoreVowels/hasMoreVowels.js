const moreVowels = string => {
    vowels = ['a', 'e', 'i', 'o', 'u'];
    stringArr = string.split('');
    stringVowelsArray = stringArr.filter(element => vowels.includes(element));
    stringConsArray = stringArr.filter(element => vowels.includes(element) === false);
    if (stringVowelsArray.length > stringConsArray.length) {
        return true;
    };
    return false;
};

console.log((moreVowels('moose')));