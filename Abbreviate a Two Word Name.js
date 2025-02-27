function abbrevName(name) {
  // code away
  return name
    .split(' ')
    .map((el) => {
      let res = [];
      res.push(el[0]);
      return res;
    })
    .join('.')
    .toUpperCase();
}
console.log(abbrevName('Sam Harris'));
