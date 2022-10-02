// 566. Reshape the Matrix

console.log(`_Reshape the Matrix_`);

var matrixReshape = function (mat, r, c) {
    // debugger

    if (mat.length * mat[0].length !== r * c) return mat;

    let ans = [];
    let items = [];

    for (let row of mat) {
        items.push(...row);
    }

    for (let i = 0; i < items.length; i += c) {
        ans.push(items.slice(i, i + c));
    }
    return ans;
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));
console.log(matrixReshape([[1, 2], [3, 4]], 4, 1));