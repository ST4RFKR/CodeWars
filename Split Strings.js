function solution(str) {
  let target = 2;
  let res = []
  if (str.length % 2 !== 0) {
    str = str + '_'
  }

  for (let i = 0; i < str.length; i += target) {
    res.push(str[i] + str[i + 1])

  }
  return res

}
