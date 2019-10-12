let products = [
  {
    title: "Iphone 8",
    company: "apple"
  },
  {
    title: "Galaxy",
    company: "samsung"
  },
  {
    title: "Iphone 7",
    company: "apple"
  },
  {
    title: "Iphone Xs",
    company: "apple"
  },
  {
    title: "HTC Phone",
    company: "htc"
  }
];


// new Set()
function getUnique1(arr) {
  let tempArr = arr.map(item => item.company);
  //   console.log(tempArr);
  return [...new Set(tempArr)]

}

// reduce()
function getUnique2(arr) {

  return [...arr.reduce((acc, item) => {
    acc.add(item.company);
    return acc
  }, new Set())]

}


console.log(getUnique1(products));
console.log(getUnique2(products));