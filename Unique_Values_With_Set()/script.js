// unique values using Set() data structure


function unique1(str) {
  let tempStr = new Set();

  for (let letter of str) {
    if (tempStr.has(letter)) {
      return false
    }
    tempStr.add(letter)

  }
  return true
}

function unique2(str) {
  return new Set(str).size === str.length;

}



console.log(unique1('abcde')); // true
console.log(unique1('abacdefb')); // false ad = duplicate

console.log(unique2('abcde')); // true
console.log(unique2('abacdefb')); // false ad = duplicate