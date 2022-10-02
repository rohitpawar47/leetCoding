
// 448. Find All Numbers Disappeared in an Array


console.log(`_Find duplicate number part 1_`);

const findDuplicate = function (nums) {
    let i = 0;

    while (i < nums.length) {
        if (nums[i] !== i + 1) {
            let correct = nums[i] - 1;

            if (nums[i] !== nums[correct]) {
                let temp = nums[i];
                nums[i] = nums[correct];
                nums[correct] = temp;
            }
            else {
                return nums[i];
            }
        }
        else {
            i++
        }
    }
}

console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([4, 3, 2, 7, 8, 2, 5, 1]));


// Another way of finding duplicate.
console.log(`_find duplicate part 2_`);
function duplicate(nums) {

    let i = 0;
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
            return nums[index];
        }
    }
}

console.log(duplicate([3, 1, 3, 4, 2]));
console.log(duplicate([1, 3, 4, 2, 2]));
console.log(duplicate([4, 3, 2, 7, 8, 2, 5, 1]));