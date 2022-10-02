// Rotate nums.
console.log(`_Rotate array_(190 ms)`);


var rotate1 = function (nums, k) {

    const rev1 = function (nums, start, end) {

        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
        return -1;
    }
    k = k % nums.length;
    rev1(nums, 0, nums.length - 1);
    rev1(nums, 0, k - 1)
    rev1(nums, k, nums.length - 1)
    return nums;
};
console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 1));
console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 2));
console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate1([-1], 3));


console.log(`_166 ms submission_`);
var rotate2 = function (nums, k) {
    let n = nums.length;
    k %= n;

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
    return nums;

    function reverse(s, e) {
        while (s <= e) {
            [nums[s++], nums[e--]] = [nums[e], nums[s]];
        }
    }
};
console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 1));
console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 2));
console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate2([-1], 3));