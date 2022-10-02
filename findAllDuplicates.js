// 442. Find All Duplicates in an Array

console.log(`_Find all duplicates number part 1_`);

const findDuplicates = function (nums) {

    let i = 0;
    let ans = [];
    while (i < nums.length) {
        let correctIndex = nums[i] - 1;
        if (nums[i] !== nums[correctIndex]) {
            let temp = nums[i];
            nums[i] = nums[correctIndex];
            nums[correctIndex] = temp;
        } else {
            i++;
        }
    }
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] != index + 1) {
            ans.push(nums[index]);
        }
    }
    return ans;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([1, 1, 2]));
console.log(findDuplicates([1]));