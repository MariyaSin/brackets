module.exports = function check(str, bracketsConfig) {
  let stack = [];
  str = str.split('');

  for (let symb = 0; symb < str.length; symb++){
    
    point: for (let i = 0; i < bracketsConfig.length; i++){
      if (bracketsConfig[i][0] === str[symb] && stack[stack.length - 1] !== bracketsConfig[i][1]){
        stack.push(str[symb]);
        break point;
      }
      if (bracketsConfig[i][1] === str[symb] && stack[stack.length - 1] === bracketsConfig[i][0]){
        stack.pop();
        break point;
      }
      if (bracketsConfig[i][1] === str[symb]){
        return false;
      }
    }
  }
    return stack.length == 0;
}
