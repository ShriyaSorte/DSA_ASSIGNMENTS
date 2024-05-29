// Transpose of a Matrix
// Given a 2D array (matrix), write a program to find its transpose
// const matrix = [[1,2,3],[4,5,6],[7,8,9]];

function transpose(matrix) {
    let transposedMatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
        transposedMatrix[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            transposedMatrix[i][j] = matrix[j][i];
        }
    }
    return transposedMatrix;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transposed = transpose(matrix);
console.log(transposed);
