// 229. Majority Element II

console.log(`_229. Majority Element II_`);

var majorityElement = function (nums) {
    let ans = [];
    let major = Math.floor(nums.length / 3);
    let candidate1 = 0;
    let candidate2 = 0;
    let life1 = 0;
    let life2 = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate1) {
            life1++;
        }
        else if (nums[i] === candidate2) {
            life2++;
        }
        else if (life1 === 0) {
            candidate1 = nums[i];
            life1 = 1;
        }
        else if (life2 === 0) {
            candidate2 = nums[i];
            life2 = 1;
        }
        else {
            life1--;
            life2--;
        }
    }

    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (candidate1 === nums[i]) count1++;
        if (candidate2 === nums[i]) count2++;
    }
    if (count1 > major) ans.push(candidate1);
    if (count2 > major) ans.push(candidate2);


    let s = new Set([...ans]);
    ans = [...s];

    return ans;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1]));
console.log(majorityElement([1, 2]));
console.log(majorityElement([2, 2]));
console.log(majorityElement([0, 0, 0]));
console.log(majorityElement([1, 1, 1, 1]));