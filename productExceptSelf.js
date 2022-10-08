// 238. Product of Array Except Self

console.log(`_Product of Array Except Self_`);

var productExceptSelf = function (nums) {
    // debugger
    const left = new Array(nums.length).fill(0);
    left[0] = 1;
    const right = new Array(nums.length).fill(0);
    right[right.length - 1] = 1;

    for (let i = 1; i < nums.length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = left[i] * right[i];
    }
    // console.log(left);
    // console.log(right);
    return nums;

};

console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));