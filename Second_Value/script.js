// find second lowest and second greatest

function secondValue(arr) {
  let uniqueValues = [...new Set(arr)];
  let sortedArr = uniqueValues.sort((a, b) => a - b);


  if (sortedArr.length < 2) {
    return `${sortedArr[0]}`
  } else if (sortedArr.length === 2) {
    return `${sortedArr[0]} ${sortedArr[1]}`
  } else {
    return `${sortedArr[1]} ${sortedArr[sortedArr.length - 2]}`
  }


}

console.log(secondValue([1])); // 1
console.log(secondValue([4, 2])); // 2, 4
console.log(secondValue([11, 44, 22])); // 11, 22, 44 === 22
console.log(secondValue([3, 2, 88, 3, -11, 67, 7])); // -11, 2, 3, 7, 67, 88 === 2, 67