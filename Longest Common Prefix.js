/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = '';
  if (strs.length === 0) {
    return prefix;
  }
  for (let i = 0; i < strs.length; i++) {
    if (strs[i][i] === strs[i + 1][i]) {
      prefix = strs[i][i];
    }
  }
  console.log(prefix);
};

longestCommonPrefix(['flower', 'flow', 'flight']);
