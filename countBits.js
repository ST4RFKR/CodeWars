var countBits = function (n) {
  let binaryRepresentation = n.toString(2);
  return binaryRepresentation.split('1').length - 1;
};
