function countSheeps(sheep) {
  let count = 0;
  sheep.map((el) => (el === true ? count++ : count));
  return count;
}
