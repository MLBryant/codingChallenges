// Write your solution below:
const pigLatinizer = string => {
    vowels = ['a', 'e', 'i', 'o,', 'u'];
    stringSplit = string.split(' ');
    sentence = '';
    for (let i = 0; i < stringSplit.length; i++) {
      let word = stringSplit[i];
      if (vowels.indexOf(word[0])) {
        word =  word.substring(1) + word[0] + 'ay';
            } else {
            word = word + 'yay';
            }
            sentence = sentence + word + ' ';
        }
        console.log(sentence);
    }
    
  
  pigLatinizer('There\'s a snake in my boots');
