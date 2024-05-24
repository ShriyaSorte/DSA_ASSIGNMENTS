// Find the Missing Number
// Given an array of n-1 integers in the range of 1 to n with no duplicates in the array. One of the
// integers is missing in the array. Find the missing integer.

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
     let sum = 0;
     for(let i=0; i<n-1; i++){
        sum = sum + arr[i];
     }
    
     let missingNumber = totalSum - sum;

     return missingNumber;
}

const arr = [1, 2, 4, 6, 3, 7, 8];
const missingNumber = findMissingNumber(arr);
console.log("The missing number is:", missingNumber); 