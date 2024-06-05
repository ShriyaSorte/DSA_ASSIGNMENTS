// Prefix to infix conversion using stack
// Write a program to convert a prefix expression to an infix expression using a stack
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function prefixtoinfix(expression) {
    let stack = [];
    let operators = new Set(['+', '-', '*', '/']);
    let tokens = expression.split(' ').reverse();

    for(let token of tokens) {
        if(operators.has(token)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let infixexpressions = `(${operand1} ${token} ${operand2})`;
            stack.push(infixexpressions);
        } 
        else {
            stack.push(token);
        }
    }
    return stack.pop();
}

const prefix = "* + A B - C D"  
const inprefix = prefixtoinfix(prefix);
console.log(inprefix);