// return number with most repeats
// if two numbers the repeated the same return the first
// if none repeated return -1

function findRepeatedNumber(arr) {
  let max = 1;
  let position = 0;
  let value = -1;

  let numbers = arr.reduce((acc, number, i) => {
    // acc[number] = acc[number] + 1 || 1
    acc[number] = acc[number] ?

      {
        ...acc[number],
        amount: acc[number]["amount"] + 1
      }
      : {
        amount: 1,
        i
      }

    let amount = acc[number].amount;
    let index = acc[number].i;


    if (amount > max || (amount === max && amount > 1 && index <= position)) {
      max = amount;
      position = index
      value = number;
    }


    return acc
  }, {})


  return value

}


console.log(findRepeatedNumber([5, 2, 2, 1, 5])); // 5
console.log(findRepeatedNumber([6, 5, 5, 10, 10, 10])); // 10
console.log(findRepeatedNumber([3, 4, 1, 6, 10])); // -1