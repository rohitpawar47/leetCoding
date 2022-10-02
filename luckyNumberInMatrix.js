// 1380. Lucky Numbers in a Matrix

console.log(`_Lucky Numbers in a Matrix_`);

var luckyNumbers = function (matrix) {
    // debugger
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        let minIdx = 0;
        let min = Number.MAX_VALUE;
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
                minIdx = j;
            }
        }
        let isTrue = true;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][minIdx] < matrix[j][minIdx]) {
                isTrue = false;
                break;
            }
        }
        if (isTrue) {
            arr.push(matrix[i][minIdx]);
        }

    }
    return arr;
};

console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]));
console.log(luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]));
console.log(luckyNumbers([[7, 8], [1, 2]]));

