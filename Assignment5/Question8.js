// Prefix to postfix conversion using stack
// Write a program to convert a prefix expression to a postfix expression using a stack.
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function prefixToPostfix(prefixExpression) {
    const stack = [];
    const operators = ['+', '-', '*', '/', '^']; 
  
    const expression = prefixExpression.split(' ').reverse(); 
  
    for (let i = 0; i < expression.length; i++) {
      const token = expression[i];
  
      if (operators.includes(token)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        stack.push(operand1 + ' ' + operand2 + ' ' + token); 
      } else {
        stack.push(token);
      }
    }
  
    return stack.pop();
  }
  
  const prefixExpression = "* + A B - C D";
  const postfixExpression = prefixToPostfix(prefixExpression);
  console.log(`Postfix expression: ${postfixExpression}`); 