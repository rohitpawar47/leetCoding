// 53. Maximum Subarray..

var maxSubArray = function (nums) {
    // debugger
    let arr = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        arr = Math.max(arr, nums[i]);
    }
    return arr;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));