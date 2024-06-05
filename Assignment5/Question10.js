// Postfix to infix conversion using stack
// Write a program to convert a postfix expression to an infix expression using a stack
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function postfixToInfix(postfixExpression) {
    const stack = [];
    const operators = ['+', '-', '*', '/', '^']; 
  
    const expression = postfixExpression.split(' ');
  
    for (let i = 0; i < expression.length; i++) {
      const token = expression[i];
  
      if (operators.includes(token)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        stack.push(`(${operand1} ${token} ${operand2})`); 
      } else {
        stack.push(token);
      }
    }
  
    return stack.pop();
  }
  const postfixExpression = "A B + C D - *";
  const infixExpression = postfixToInfix(postfixExpression);
  console.log(`Infix expression: ${infixExpression}`); 