const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isBalanced(expression) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of expression) {
        if (char in map) {
            // If the character is an opening bracket, push it onto the stack
            stack.push(char);
        } else if (Object.values(map).includes(char)) {
            // If the character is a closing bracket, check if it matches the top of the stack
            let last = stack.pop();
            if (map[last] !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all opening brackets have been matched
    return stack.length === 0;
}

// Example usage
console.log(isBalanced("{[()]}"));       // Output: true
console.log(isBalanced("{[(])}"));       // Output: false
