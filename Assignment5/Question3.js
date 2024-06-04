// Next Greater Element, Given an array, find the next greater element for each element in the array. The next greater element for an element x is the first greater element on the right side of x in the array.

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function nextGreaterElements(arr) {
    let n = arr.length;
    let result = new Array(n).fill(-1);
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            let index = stack.pop();
            result[index] = arr[i];
        }
        stack.push(i);
    }

    return result;
}

let arr = [4, 5, 2, 25];
console.log(nextGreaterElements(arr)); 