// Implement a stack using arrays with basic operations: push, pop, peek, and isEmpty.
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const prompt = require("prompt-sync")();

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
      console.log(`${element} pushed to the stack`);
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      const poppedElement = this.items.pop();
      console.log(`${poppedElement} popped from the stack`);
      return poppedElement;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      console.log(`Top element: ${this.items[this.items.length - 1]}`);
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const stack = new Stack();
  
  while (true) {
    console.log("Choose an operation:");
    console.log("1. Push");
    console.log("2. Pop");
    console.log("3. Peek");
    console.log("4. Is Empty");
    console.log("5. Exit");
  
    const choice = parseInt(prompt("Enter your choice: "));
  
    if (choice === 1) {
      const element = prompt("Enter the element to push: ");
      stack.push(element);
    } else if (choice === 2) {
      stack.pop();
    } else if (choice === 3) {
      stack.peek();
    } else if (choice === 4) {
      console.log(`Stack is empty: ${stack.isEmpty()}`);
    } else if (choice === 5) {
      console.log("Exiting the program...");
      break;
    } else {
      console.log("Invalid choice. Please try again.");
    }
  }