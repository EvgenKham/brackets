module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig;
  let stack = [];
  let key = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if ( stack.length === 0 ){
      stack.push(char);
      continue;
    }

    brackets.forEach( item => {
      if ( stack.slice(-1)[0] === item[0] ) {
        key = item;
      }
    });

    if ( char === key[1]) {
      stack.pop();
    } else if ( char !== key[1]){
      stack.push(char);
    }
  }

  if (stack.length !== 0) {
    return false;
  }
  return true;
}
