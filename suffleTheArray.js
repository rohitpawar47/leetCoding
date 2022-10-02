// 1470. Shuffle the Array
console.log(`_Shuffle the Array_`);

const shuffle = function (nums, n) {
    let ans = [];
    let s = 0;
    let e = n;

    while (e < nums.length) {
        ans.push(nums[s], nums[e]);
        s++;
        e++;
    }
    return ans;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.log(shuffle([1, 1, 2, 2], 2));