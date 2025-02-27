function deleteNth(arr, n) {
  // ...
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], 0);
    if (!map.has(arr[i])) {
      map.set(arr[i], 0);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  return map;
}

console.log(deleteNth([20, 37, 20, 21], 1)); // [20,37,21]
