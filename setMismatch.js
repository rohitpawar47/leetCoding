// 645. Set Mismatch

console.log(`_Set Mismatch_`);

const findErrorNums = function (nums) {

    let i = 0;
    let ans = [];
    while (i < nums.length) {
        let correctIndex = nums[i] - 1;
        if (nums[i] !== nums[correctIndex]) {
            let temp = nums[i];
            nums[i] = nums[correctIndex];
            nums[correctIndex] = temp;
        } else {
            i++;
        }
    }
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] != index + 1) {
            ans.push(nums[index], index + 1);
        }
    }
    return ans;
}

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([1]));
console.log(findErrorNums([1, 2, 3]));