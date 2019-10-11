function capitalizeFirstLetter1(str) {
  let words = str.split(' ');

  let capitalized = words.map(word => {

    let strLetter = word.split('')
    // console.log(strLetter)

    let firstLetter = strLetter[0].toUpperCase();
    // console.log(strLetter);

    return firstLetter + word.slice(1)
  });

  //   console.log(capitalized)
  return capitalized.join(' ');
}

// ALTERNATIVE TO THE FIRST WAY
function capitalizeFirstLetter01(str) {
  let words = str.split(' ');

  let capitalized = words.map(word => {

    let firstLetter = word.slice(0, 1);
    let restLetters = word.slice(1);
    // console.log(strLetter);

    return `${firstLetter.toUpperCase()}${restLetters}`;
  });

  //   console.log(capitalized)
  return capitalized.join(' ');
}

// ALTERNATIVE WAY: charAt() METHOD
function capitalizeFirstLetter2(str) {
  let words = str.split(' ');

  let capitalized = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  //   console.log(capitalized)
  return capitalized.join(' ');
}



console.log(capitalizeFirstLetter1("I woke up early today"));
console.log(capitalizeFirstLetter1("I went straight to the beach"));

console.log(capitalizeFirstLetter01("I woke up early today"));
console.log(capitalizeFirstLetter01("I went straight to the beach"));

console.log(capitalizeFirstLetter2("I woke up early today"));
console.log(capitalizeFirstLetter2("I went straight to the beach"));