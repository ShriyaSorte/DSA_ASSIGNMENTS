// Rotate a Matrix by 90 Degrees
// Given a 2D array (matrix), write a program to rotate the matrix by 90 degrees clockwise.
// const matrix = [[1,2,3],[4,5,6],[7,8,9]];

function rotateMatrix (matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    let rotatedMatrix = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            rotatedMatrix[j][n - 1 - i] = matrix[i][j];
        }
    }
    return rotatedMatrix;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let rotated = rotateMatrix(matrix);
console.log(rotated);