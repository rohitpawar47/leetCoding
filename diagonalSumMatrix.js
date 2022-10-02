// 1572. Matrix Diagonal Sum

console.log(`_Matrix Diagonal Sum_`);

var diagonalSum = function (mat) {
    // debugger
    let sum = 0;
    let n = mat.length;
    // this will give the sum of diagonals
    for (let i = 0; i < n; i++) {
        sum += (mat[i][i] + mat[i][n - i - 1]);
    }
    // check if given matrix length is odd or even 
    if (n % 2 === 0) {
        return sum;
    } else {
        return sum - mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }

};

var mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(diagonalSum(mat));


