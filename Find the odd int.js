function findOdd(arr) {
  let map = new Map();

  for (let element of arr) {
    map.set(element, (map.get(element) || 0) + 1);

  }
  for (let [key, value] of map) {
    if (value % 2 !== 0) {
      return key
    }
  }
}


