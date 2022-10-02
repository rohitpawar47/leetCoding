// 1480. Running Sum of 1d Array

console.log(`_Running Sum of 1D Array_`);

const runningSum = function (nums) {
    let ans = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i];
        ans.push(nums[i]);
    }
    return ans;
}

console.log(runningSum([1, 2, 3, 4])); // 1,3,6,10
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1])); 