// 73. Set Matrix Zeroes

console.log(`_Set Matrix Zeroes_`);

const setZeros = function (r, c, matrix) {

    for (let i = 0; i < matrix.length; i++) {
        matrix[i][c] = 0;
    }
    for (let j = 0; j < matrix[0].length; j++) {
        matrix[r][j] = 0;
    }
}

var setZeroes = function (matrix) {

    let temp = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                temp.push([i, j]);
            }
        }
    }

    for (let place of temp) {
        let row = place[0];
        let col = place[1];
        setZeros(row, col, matrix);
    }

};

var matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]];

matrix = [[
    0, 1, 2, 0],
[3, 4, 5, 2],
[1, 3, 1, 5]];

setZeroes(matrix);
console.log(matrix);