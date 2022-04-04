function titleCase(sentence) {
  let lowerCase = sentence
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  return lowerCase;
}
console.log(titleCase('hello every body'));

function at(arr, index) {
  if (index < 0) {
    return arr[arr.length + index];
  } else {
    return arr[index];
  }
}
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(at(arr, 2));
