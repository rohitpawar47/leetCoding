// 34. Find First and Last Position of Element in Sorted Array

console.log(`_Find First and Last Position of Element in Sorted Array_`);


const searchRange = function (nums, target) {
    // debugger
    let ans = [-1, -1];
    ans[0] = bSearch(nums, target, false);
    if (ans[0] != -1) {
        ans[1] = bSearch(nums, target, true);
    }
    return ans;
}

var bSearch = function (nums, target, firstOccurance) {
    let ans = -1;
    let s = 0;
    let e = nums.length - 1;

    while (s <= e) {
        let m = Math.floor(s + (e - s) / 2);

        if (target > nums[m]) s = m + 1;

        else if (target < nums[m]) e = m - 1;

        else {
            ans = m;
            if (firstOccurance) {
                s = m + 1;
            } else {
                e = m - 1;
            }
        }
    }
    return ans;

};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));