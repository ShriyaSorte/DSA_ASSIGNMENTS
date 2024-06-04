const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function areParenthesesBalanced(expression) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    const bracketPairs = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
  
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0; 
  }
  
  const expression1 = "{[()]}";
  const expression2 = "{[(])}";
  
  console.log(expression1, areParenthesesBalanced(expression1)); 
  console.log(expression2, areParenthesesBalanced(expression2)); 
  
  rl.close();
