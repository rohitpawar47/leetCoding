//  1929. Concatenation of Array

console.log(`_Concatenation of array_`);

const getConcatenation = function (nums) {
    let ans = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }
    return ans;
}

console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation([1, 3, 2, 1]));