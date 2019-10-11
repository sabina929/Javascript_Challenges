// ARITHMETIC, GEOMETRIC, NO PATTERN
// NO NEGATIVE NUMBERS

function mathSequences(arr) {
  // let arith = [];
  // let geo = [];

  // we can add only one with new Set()
  let arith = new Set();
  let geo = new Set();

  for (let i = 1; i < arr.length; i++) {
    let subtracted = arr[i] - arr[i - 1];
    // arith.push(subtracted);
    arith.add(subtracted);
    let divided = arr[i] / arr[i - 1];
    // geo.push(divided);
    geo.add(divided);
  }

  // console.log(arith);
  // console.log(geo);

  if (arith.size === 1) {
    return "arithmetic"
  } else if (geo.size === 1) {
    return "geometric"
  } else {
    return "-1"
  }
}


console.log(mathSequences([2, 4, 6, 8])); // arithmetic
console.log(mathSequences([6, 9, 12, 15])); // arithmetic
console.log(mathSequences([1, 5, 9, 13])); // arithmetic
console.log(mathSequences([5, 10, 15, 20])); // arithmetic

console.log(mathSequences([3, 9, 27, 81])); // geometric
console.log(mathSequences([2, 4, 8, 16])); // geometric
console.log(mathSequences([4, 16, 64, 256])); // geometric
console.log(mathSequences([5, 25, 125, 625])); // geometric

console.log(mathSequences([2, 5, 14, 89])); // no pattern/ "-1"
console.log(mathSequences([1, 3, 52, 78])); // no pattern/ "-1"
console.log(mathSequences([7, 12, 31, 42])); // no pattern/ "-1"
console.log(mathSequences([18, 24, 87, 125])); // no pattern/ "-1"



