// 59. Spiral Matrix II

console.log(`_59. Spiral Matrix II_`);

var generateMatrix = function (n) {
    let size = n * n;
    let ans = Array(n).fill().map(item => Array(n).fill(-1));
    let top = 0;
    let left = 0;
    let bottom = n - 1;
    let right = n - 1;
    let num = 1;

    while (num <= size) {

        for (let i = left; i <= right && num <= size; i++) {
            ans[top][i] = num;
            num++;
        }
        top++;

        for (let i = top; i <= bottom && num <= size; i++) {
            ans[i][right] = num;
            num++;
        }
        right--;

        for (let i = right; i >= left && num <= size; i--) {
            ans[bottom][i] = num;
            num++;
        }
        bottom--;

        for (let i = bottom; i >= top && num <= size; i--) {
            ans[i][left] = num;
            num++;
        }
        left++;
    }
    return ans;

};

console.log(generateMatrix(3));
console.log(generateMatrix(1));


