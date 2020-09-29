function getBracketNum(char, bracketsConfig, isOpen = true) {
  for(let bracketNum = 0; bracketNum < bracketsConfig.length; bracketNum++) {
    if(bracketsConfig[bracketNum][Number(!isOpen)] == char) return bracketNum
  }
  return -1
}

module.exports = function check(str, bracketsConfig) {
  let stack = []
  for(const char of str) {
    let bracketOpen = getBracketNum(char, bracketsConfig)
    let bracketClose = getBracketNum(char, bracketsConfig, false)

    if(bracketClose === stack[stack.length-1]) stack.pop()
    else if(bracketOpen >= 0) stack.push(bracketOpen)
    else return false
  }
  return stack.length == 0
}
