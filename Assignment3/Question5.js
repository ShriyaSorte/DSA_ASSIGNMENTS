// Find the Intersection of Two Arrays
// Given two arrays, write a program to find their intersection. The intersection should contain only the unique elements present in both arrays.

function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const intersectionArray = arr2.filter((item) => set1.has(item));
    return [...new Set(intersectionArray)];
}

const array1 = [1, 2, 2, 1];
const array2 = [2, 2];
const result = intersection(array1, array2);
console.log(result);