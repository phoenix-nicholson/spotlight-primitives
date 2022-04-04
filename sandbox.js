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

function anagrams(wordOne, wordTwo) {
  let word1 = wordOne.split('').sort().join('');
  console.log('word1', word1);

  let word2 = wordTwo.split('').sort().join('');
  console.log('word2', word2);

  if (word1 === word2) {
    return true;
  } else {
    return false;
  }
}
console.log('anagrams', anagrams('superintended', 'unpredestined'));
console.log('anagrams', anagrams('pictorialness', 'documentarily'));

function uniqueChar(string) {
  //   const str = string.split('');
  //   const splitStr = new Set(str);

  //   const spreadString = [...splitStr].join('');
  //   return spreadString;

  //   string = string.split('');
  //   string = new Set(string);
  //   string = [...string].join('');
  //   return string;
  const str = new Set(string);
  const unique = [...str];
  return unique;
}
console.log('uniqueChar', uniqueChar('abdacabad'));
