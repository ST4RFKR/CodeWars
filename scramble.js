function scramble(str1, str2) {
  let arrSort1 = [...str1].sort();
  let arrSort2 = [...str2].sort();
  console.log(arrSort1, arrSort2);
  let res = [];
  for (let i = 0; i <= arrSort1.length; i++) {
    console.log(res);

    for (let j = 0; j <= arrSort2.length; j++) {
      if (arrSort1[i] === arrSort2[j]) {
        res.push(arrSort1[i]);
      }
    }
  }

  if (res.join('') === arrSort2.join('')) {
    return true;
  }

  return false;
}
console.log(scramble('katas', 'steak'));
