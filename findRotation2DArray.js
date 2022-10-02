// 1886. Determine Whether Matrix Can Be Obtained By Rotation

console.log(`_Determine Whether Matrix Can Be Obtained By Rotation (90 degree)_`);

const findRotation = function (mat, target) {
    for (let i = 0; i < 4; i++) {
        if (checker(mat, target)) {
            return true;
        }
        rotateMatrix(mat);
    }
    return false;
}

function rotateMatrix(mat) {
    // transpose (dialognally)
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < i; j++) {
            temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }
    // to flip the values of column
    let start = 0;
    let end = mat.length - 1;
    while (start <= end) {
        for (let i = 0; i < mat.length; i++) {
            temp = mat[i][start];
            mat[i][start] = mat[i][end];
            mat[i][end] = temp;
        }
        start++;
        end--;
    }

}

function checker(mat, target) {
    // To check weather mat is equal to target.
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (mat[i][j] !== target[i][j]) {
                return false;
            }
        }
    }
    return true;
}



console.log(findRotation([[0, 1], [1, 0]], [[1, 0], [0, 1]]));
console.log(findRotation([[0, 1], [1, 1]], [[1, 0], [0, 1]]));
console.log(findRotation([[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[1, 1, 1], [0, 1, 0], [0, 0, 0]]));