// Find whether an array is subset of another array Given two arrays: arr1[0..m-1] and arr2[0..n-1]. Find whether arr2[] is a subset of arr1[] or not. Both arrays are not in sorted order. It may be assumed that elements in both arrays are distinct.
// input: arr1[] = {11,1,13,21,3,7}, arr2[] = {11,3,7,1}

function isSubset(arr1, arr2) {
    let set = new Set(arr1);
    for (let i = 0; i < arr2.length; i++) {
        if (!set.has(arr2[i])) {
            return false; 
        }
    }
    return true;
}

let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [11,3,7,1];

if (isSubset(arr1, arr2)) {
    console.log("arr2[] is a subset of arr1[]");
} else {
    console.log("arr2[] is not a subset of arr1[]");
}
