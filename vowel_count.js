function getCount(str) {
  let count = 0;
  const matrix = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.split('').length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (str.split('')[i] === matrix[j]) {
        count++;
      }
    }
  }

  return count;
}

console.log(getCount('o a kak ushakov lil vo kashu kakao'));
