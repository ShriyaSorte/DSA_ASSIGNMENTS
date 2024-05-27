// Count Frequency of Elements
// Given an array of n integers, write a program to count the frequency of each element in the array.

function countFrequencies(arr){
    const frequency = {};
    arr.forEach(element => {
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    });

    return frequency;
}

const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const frequencies = countFrequencies(arr);
console.log(frequencies);