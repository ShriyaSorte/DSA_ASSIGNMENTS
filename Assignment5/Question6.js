// Infix to postfix conversion using stack
// Write a program to convert an infix expression to a postfix expression using a stack.
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function infixToPostfix(infixExpression) {
    const stack = [];
    const operators = {
      '+': 2,
      '-': 2,
      '*': 2,
      '^': 2, 
    };
    const precedence = (operator) => operators[operator] || 0; 
  
    const expression = infixExpression.split(' ');
    let postfixExpression = '';
  
    for (let i = 0; i < expression.length; i++) {
      const token = expression[i];
  
      if (token === '(') {
        stack.push(token);
      } else if (token === ')') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          postfixExpression += stack.pop() + ' ';
        }
        stack.pop(); // Remove the '('
      } else if (operators.hasOwnProperty(token)) {
        while (
          stack.length > 0 &&
          precedence(token) <= precedence(stack[stack.length - 1])
        ) {
          postfixExpression += stack.pop() + ' ';
        }
        stack.push(token);
      } else {
        postfixExpression += token + ' '; 
      }
    }
  
    while (stack.length > 0) {
      postfixExpression += stack.pop() + ' ';
    }
  
    return postfixExpression.trim(); 
  }
  const infixExpression = "a+b*(c^d-e)^(f+g*h)-i";
  const postfixExpression = infixToPostfix(infixExpression);
  console.log(`Postfix expression: ${postfixExpression}`); 