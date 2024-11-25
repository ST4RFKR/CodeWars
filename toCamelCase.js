function toCamelCase(str) {
  let arr = str.replace(/[-_]/g, ' ').split(' ');
  return arr.map((el) => (el !== arr[0] ? el.replace(el[0], el[0].toUpperCase()) : el)).join('');
}
