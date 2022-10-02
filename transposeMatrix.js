// 867. Transpose Matrix

console.log(`-867. Transpose Matrix-`);

var transpose = function (matrix) {
    // let ans = Array.from({ length: matrix[0].length }, () => new Array(matrix.length).fill(0));
    let ans = [];
    let r = matrix.length;
    let c = matrix[0].length;
    for (let i = 0; i < c; i++) {
        ans[i] = [];
    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {

            ans[j][i] = matrix[i][j];
        }
    }
    return ans;
};

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

console.log(transpose(matrix));

