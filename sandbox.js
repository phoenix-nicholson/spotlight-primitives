function at(arr, index) {
  if (index < 0) {
    return arr[arr.length + index];
  } else {
    return arr[index];
  }
}
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(at(arr, 2));
