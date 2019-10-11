// return true only if all values are unique, otherwise false
// using array, object, string method lastIndexOf()
// no Set Data Structure


// ARRAY
function unique1(str) {
  let values = [];

  for (let letter of str) {
    // console.log(values.indexOf(letter));
    if (values.indexOf(letter) !== -1) {
      return false;
    }
    values.push(letter);
  }

  return true
}


// ALTERNATIVE WAY: OBJECT
function unique2(str) {
  let values = {};

  for (let letter of str) {
    // console.log(values.indexOf(letter));
    if (values[letter]) {
      return false;
    }
    values[letter] = "exists";
  }

  return true
}


// ALTERNATIVE WAY: lastIndexOf() STRING METHOD
function unique3(str) {
  for (let i = 0; i < str.length; i++) {
    // console.log(str.lastIndexOf(str[i]));

    if (str.lastIndexOf(str[i]) !== i) {
      return false
    }
  }

  return true
}

console.log(unique1('abcde')); // true
console.log(unique1('abacdefb')); // false

console.log(unique2('abcde')); // true
console.log(unique2('abacdefb')); // false

console.log(unique3('abcde')); // true
console.log(unique3('abacdefb')); // false