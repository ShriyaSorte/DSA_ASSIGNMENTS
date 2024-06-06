// Implement a stack using arrays with basic operations: push, pop, peek, and isEmpty.
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const { exit } = require('process');

let stack = [];

function mainMenu(){
    console.log("\n*************************** Stack operations using array ***************************");
    console.log("choose one from below options");
    console.log("1.Push \n2.Pop \n3.Show \n4.Exit");

    rl.question("enter your choice : ", (choice) => {
        if(choice === "1"){
            Push();
        }
        else if(choice === "2"){
            Pop();
        }
        else if(choice === "3"){
            Show();
        }
        else if(choice === "4"){
            Exit();
        }
        else{
            console.log("You have entered invalid choice please enter again")
        }
    })
}

function Push(){
    console.log("\n*************************** Push operation called ***************************");
    rl.question('enter the number you want to push : ', (element) => {
        stack.push(element);
        console.log("element added successfully");
        Show();
        // mainMenu();
    })
};
function Pop(){
    console.log("\n*************************** Pop operation called ***************************");
    if(stack.length === 0){
        console.log('stack is empty.')
    }else{
        stack.pop();
        console.log("element popped successfully");
        Show();
    }
    
   
};
function Show(){
    console.log("\n*************************** show operation called ***************************");
    
    if(stack.length ===0){
        console.log("stack is empty");
    }
    else{
    for(let i=stack.length-1; i>=0 ; i--){
        console.log(stack[i]);
        
    };
};
    mainMenu();
};
function Exit(){
    console.log("Exiting the program");
    rl.close();
};
mainMenu();