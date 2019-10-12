// prime number  = can only divide evenly by itself or one


function findPrime1(num) {
  if (num < 2) {
    return false
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

// square root
function findPrime2(num) {
  if (num < 2) {
    return false
  }

  let root = Math.ceil(Math.sqrt(num));
  //   console.log(root)


  for (let i = 2; i <= root; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

console.log(findPrime1(8)); // false
console.log(findPrime1(11)); // true
console.log(findPrime1(121)); // false
console.log(findPrime1(127)); // true


console.log(findPrime2(8)); // false
console.log(findPrime2(11)); // true
console.log(findPrime2(121)); // false
console.log(findPrime2(127)); // true

// console.log(121 % 11)