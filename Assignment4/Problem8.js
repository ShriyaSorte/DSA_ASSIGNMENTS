// Boundary elements of a Matrix. Given a matrix of size n x m. Print the boundary elements of the matrix. Boundary elements are those elements that are not surrounded by elements in all four directions, i.e. elements in the first row, first column, last row, and last column
// Input: 1, 2, 3, 5, 6, 7, 1, 2, 3

function printBoundaryElements(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0 || i === n - 1 || j === 0 || j === m - 1) {
                console.log(matrix[i][j]);
            }
        }
    }
}

const matrix = [
    [1, 2, 3],
    [5, 6, 7],
    [1, 2, 3]
];
printBoundaryElements(matrix); 