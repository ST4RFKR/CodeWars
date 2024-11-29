function moveZeros(arr) {
  let count = 0;
  let newArr = arr.map((el) => {
    if (el === 0) {
      count++;
    }
    return el;
  });
  let filteredArr = newArr.filter((el) => el !== 0);

  for (let i = 0; i < count; i++) {
    filteredArr.push(0);
  }
  console.log(filteredArr);

  return filteredArr;
}
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']);
