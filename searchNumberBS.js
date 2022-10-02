// Search Insert Position.
console.log(`_search a number_`);

const searchInsert = function (nums, target) {

    let s = 0;
    let e = nums.length - 1;

    while (s <= e) {

        m = Math.floor(s + (e - s) / 2);

        if (target === nums[m]) return m;

        else if (target > nums[m]) s = m + 1;

        else e = m - 1;
    }
    return s;
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));