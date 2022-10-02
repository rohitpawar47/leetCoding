// 448. Find All Numbers Disappeared in an Array

console.log(`_Find disappeared numbers_`);

const findDisappearedNumbers = function (nums) {
    let i = 0;

    while (i < nums.length) {
        let correct = nums[i] - 1;
        if (nums[i] !== nums[correct]) {
            let temp = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp;
        } else {
            i++
        }
    }
    // console.log(nums);
    let ans = [];
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== j + 1) {
            ans.push(j + 1);
        }
    }
    return ans;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));