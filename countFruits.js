function countFruits(arr) {
  let res = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (res.has(arr[i])) {
      res.set(arr[i], res.get(arr[i]) + 1);
    } else {
      res.set(arr[i], 1);
    }
  }
  return res;
}
console.log(countFruits(['apple', 'mango', 'banana', 'apple', 'banana', 'apple', 'apple'])); // Map(2) { 'apple' => 4, 'banana' => 2 }
