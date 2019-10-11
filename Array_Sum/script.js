// Check if all the numbers summed up are eqaul to the largest number in the array

function arraySum1(arr) {

  let largest = 0;

  for (let number of arr) {
    if (number > largest) {
      largest = number
    }
  }
  //   console.log(largest)
  let restNumbers = arr.filter(number => number !== largest)
  //   console.log(restNumbers)

  let sum = restNumbers.reduce((acc, number) => {
    return acc + number
  }, 0)
  //   console.log(sum)


  if (sum === largest) {
    return true
  }
  return false
}


function arraySum2(arr) {

  let tempArr = arr.sort((a, b) => {
    return a - b
  })
  //   console.log(tempArr);

  let largest = tempArr.pop();
  //   console.log(largest);

  let acc = 0;
  tempArr.forEach(number => acc += number);

  return largest === acc

}



console.log(arraySum1([1, 2, 4, 6, 13])); // true 1+2+4+6=13 13==13
console.log(arraySum1([6, 9, 10, 15, 40])); // true 6+9+10+15=40 40==40

console.log(arraySum1([1, 2, 4, 34, 22])); // false 1+2+4+22=29 29!=34
console.log(arraySum1([19, 8, 11, 6, 18])); // false 8+11+6+18=43 43!=19


console.log(arraySum2([1, 2, 4, 6, 13])); // true 1+2+4+6=13 13==13
console.log(arraySum2([6, 9, 10, 15, 40])); // true 6+9+10+15=40 40==40

console.log(arraySum2([1, 2, 4, 34, 22])); // false 1+2+4+22=29 29!=34
console.log(arraySum2([19, 8, 11, 6, 18])); // false 8+11+6+18=43 43!=19