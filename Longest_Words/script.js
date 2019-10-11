function longestWords(str) {
  let words = str.split(' ');
  let size = 0;
  let max = [''];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= size) {
      size = words[i].length;

      // the last item in the max array
      if (max[max.length - 1].length < words[i].length) {
        max = [];
        max.push(words[i])
      } else {
        max = [...max, words[i]]
      }
    }
  }

  return max;
}

console.log(longestWords("I woke up early today"));
console.log(longestWords("I woke up early today longerword"));
console.log(longestWords("I went straight to the beach"));