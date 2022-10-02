// Triplets Sum (3sum).
console.log(`_3Sum_`);

const tripletsSum = function (nums) {
    nums.sort((a, b) => a - b);
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const target = 0 - nums[i];
        let start = i + 1;
        let end = nums.length - 1;

        while (start < end) {
            const sum = nums[start] + nums[end];

            if (sum > target) {
                end--;
            }
            else if (sum < target) {
                start++;
            }
            else {
                ans.push([nums[i], nums[start], nums[end]]);
                while (nums[start] === nums[start + 1]) start++;
                while (nums[end] === nums[end - 1]) end--;
                start++;
                end--;
            }
        }

    }
    return ans;

}

console.log(tripletsSum([-1, 0, 1, 2, -1, 4]));
console.log(tripletsSum([0, 0, 0]));
console.log(tripletsSum([0, 1, 1]));
