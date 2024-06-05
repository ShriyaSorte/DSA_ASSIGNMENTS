// Infix to prefix conversion using stack
// Write a program to convert an infix expression to a prefix expression using a stack
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function infixToPrefix(infixExpression) {
  const operators = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3, 
  };
  
  const precedence = (operator) => operators[operator] || 0; 
  
  function isOperator(c) {
    return operators.hasOwnProperty(c);
  }
  
  function reverseParentheses(expression) {
    return expression.split('').map(char => {
      if (char === '(') return ')';
      if (char === ')') return '(';
      return char;
    }).join('');
  }

  const expression = infixExpression.split('').reverse();
  const reversedExpression = reverseParentheses(expression.join('')).split('');

  const stack = [];
  const result = [];

  for (let i = 0; i < reversedExpression.length; i++) {
    const token = reversedExpression[i];

    if (token.match(/[a-zA-Z0-9]/)) {
      result.push(token);
    } else if (token === '(') {
      stack.push(token);
    } else if (token === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        result.push(stack.pop());
      }
      stack.pop(); 
    } else if (isOperator(token)) {
      while (
        stack.length && 
        precedence(token) < precedence(stack[stack.length - 1])
      ) {
        result.push(stack.pop());
      }
      stack.push(token);
    }
  }

  while (stack.length) {
    result.push(stack.pop());
  }

  return result.reverse().join(' ');
}

const infixExpression = "a+b*(c^d-e)^(f+g*h)-i";
const prefixExpression = infixToPrefix(infixExpression);
console.log(`Prefix expression: ${prefixExpression}`); 
