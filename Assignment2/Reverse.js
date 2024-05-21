// Reverse code
function reverseArray(array){
    const reversedArray = [];
    for(let i=array.length-1; i>=0 ; i--){
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
const numbers = [10,20,30,40,50];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);