function tribonacci(signature, n) {
  let newArr = [...signature];
  //your code here
  for (let i = 0; i < n - 3; i++) {
    let firstEl = newArr[newArr.length - 1];
    let twoEl = newArr[newArr.length - 2];
    let treeEl = newArr[newArr.length - 3];

    newArr.push(firstEl + twoEl + treeEl);
  }
  return newArr;
}

tribonacci([0, 0, 1], 10);
let arr = [1, 2, 3];
console.log(arr[arr.length - 1]);
