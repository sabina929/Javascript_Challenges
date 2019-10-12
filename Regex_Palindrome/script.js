
function checkPolindrome1(str) {
  let regex = /\W+/g
  let arr = str.toLowerCase().split(regex);
  //   console.log(arr);
  let unreversedStr = arr.join('');
  //   console.log("unreversed", unreversedStr);
  let reversedArr = unreversedStr.split('').reverse();
  let reversedStr = reversedArr.join('')
  //   console.log("reversed", reversedStr);


  if (unreversedStr === reversedStr) {
    return true
  }

  return false
}


function checkPolindrome2(str) {
  let first = str.match(/[a-z0-9]+/ig).join('').toLocaleLowerCase()
  //   console.log(first);

  let second = first.split('').reverse().join('');
  //   console.log(second);

  return first === second;

}



console.log(checkPolindrome1('Was it a car or a cat I saw')); // true
console.log(checkPolindrome1('Red -rum, sir, -is-murder')); // true
console.log(checkPolindrome1('I got up early this morning')); // false

console.log(checkPolindrome2('Was it a car or a cat I saw')); // true
console.log(checkPolindrome2('Red -rum, sir, -is-murder')); // true
console.log(checkPolindrome2('I got up early this morning')); // false