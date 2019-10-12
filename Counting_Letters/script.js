// return first word with the greatest number of repeated letters

function countLetters(str) {

  let tempWords = str.split(' ');

  tempWords = tempWords.map(tempWord => {
    let letters = tempWord.toLowerCase().split('');
    // console.log(letters)

    return letters.reduce((acc, letter) => {
      acc[letter] = acc[letter] ? acc[letter] + 1 : 1;
      if (acc[letter] > acc.max) {
        acc.max = acc[letter]
      }
      return acc
    }, {
      max: 1,
      tempWord
    })
  })
  //   console.log(tempWords);

  let amount = 1;
  let word = "";

  for (let item of tempWords) {
    if (item.max > amount) {
      amount = item.max;
      word = item.tempWord
    }
  }

  if (amount > 1) {
    return word
  }

  return -1

}


console.log(countLetters('Javascript is the greatest programming language'));