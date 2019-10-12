// string will not contain numbers or simbols only letters

function countLetters(str) {
  let arr = str.split("");
  let lettersArr = [];
  let count = 1;


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      let value = `${count}${arr[i]}`
      lettersArr = [...lettersArr, value];
      count = 1
    }
  }
  return lettersArr.join('');
}


console.log(countLetters("ffffeerttttooo")); // 4f2e1r4t3o