// Sort a Stack, Write a program to sort a stack using recursion

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function sortStack(stack) {
    if (stack.length === 0) {
        return;
    }

    let top = stack.pop();

    sortStack(stack);

    insertInSortedOrder(stack, top);
}

function insertInSortedOrder(stack, element) {
    if (stack.length === 0 || stack[stack.length - 1] <= element) {
        stack.push(element);
        return;
    }

    let top = stack.pop();
    insertInSortedOrder(stack, element);
    stack.push(top);
}

let stack = [34,3,31,98,92,23];

console.log("Original stack:", stack);

sortStack(stack);

console.log("Sorted stack:", stack);
