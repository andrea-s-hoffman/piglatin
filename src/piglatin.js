const translate = (englishWord) => {
  // takes a string
  // returns a string
  const vowels = "aeiou";
  //   is the first letter a vowel
  if (vowels.includes(englishWord[0])) {
    // first letter is a vowel
    return englishWord + "way";
  } else {
    // the first letter was a consonant
    //   now check second letter
    if (vowels.includes(englishWord[1]) === false) {
      // first two letters are both consonants
      // move first 2 letters to the end
      // add "ay"
      let firstTwoLetters = englishWord.slice(0, 2);
      let restOfString = englishWord.slice(2);
      return restOfString + firstTwoLetters + "ay";
    } else {
      // first letter was consonant, but second is vowel
      // move that consonant to the end of the word
      // add "ay" to the end
      let firstLetter = englishWord[0];
      // index 1 with slice starts at the second character
      let restOfString = englishWord.slice(1);
      return restOfString + firstLetter + "ay";
    }
  }
};

module.exports = translate;

// for(let i=0; i< englishWord.length; i++){
//     if(vowels.includes(englishWord[i])){
//         let letter = englishWord[i];
//         // index 1 with slice starts at the second character
//         let restOfString = englishWord.slice(1);
//         return restOfString + firstLetter + "ay";
//     }
// }
