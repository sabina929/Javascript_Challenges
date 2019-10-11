// for of METHOD
function longestWord1(str) {
  let words = str.split(' ');
  //   console.log(words);
  let longest = '';

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word
    }
  }
  return longest;
}

// ALTERNATIVE WAY: forEach() METHOD
function longestWord2(str) {
  let words = str.split(' ');
  let longest = '';

  words.forEach(word => {
    if (word.length > longest.length) {
      longest = word;
    }
  })

  return longest;
}


// THE REST
function longestWordAndtheRest(str) {
  let words = str.split(' ');
  let longest = '';

  words.forEach(word => {
    if (word.length > longest.length) {
      longest = word;
    }
  })

  //   console.log(longest);

  //   console.log(words);
  let arr = words.filter(word => word.length < longest.length);
  //   console.log(arr);
  arr.unshift(`${longest};`);
  let rest = arr.join(' ')
  //   console.log(rest);

  return longest;
}

console.log(longestWord1("I woke up early today"));
console.log(longestWord1("I went straight to the beach"));

console.log(longestWord2("I woke up early today"));
console.log(longestWord2("I went straight to the beach"));

console.log(longestWordAndtheRest("I woke up early today"));
console.log(longestWordAndtheRest("I went straight to the beach"));