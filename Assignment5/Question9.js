// Postfix to prefix conversion using stack
// Write a program to convert a postfix expression to a prefix expression using a stack
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function postfixToPrefix(postfixExpression) {
    const stack = [];
    const operators = ['+', '-', '*', '/', '^']; 
  
    const expression = postfixExpression.split(' ');
  
    for (let i = 0; i < expression.length; i++) {
      const token = expression[i];
  
      if (operators.includes(token)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        stack.push(token + ' ' + operand1 + ' ' + operand2); 
      } else {
        stack.push(token);
      }
    }
  
    return stack.pop();
  }
  
  const postfixExpression = "A B + C D - *";
  const prefixExpression = postfixToPrefix(postfixExpression);
  console.log(`Prefix expression: ${prefixExpression}`); 