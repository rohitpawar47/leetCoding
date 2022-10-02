// 268. Missing Number.

console.log(`_Missing Number_`);

const missingNumber = function (nums) {

    // Sorting array.
    let i = 0;
    while (i < nums.length) {
        let correct = nums[i];
        if (nums[i] < nums.length && nums[i] != nums[correct]) {
            let temp = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp;
        } else {
            i++;
        }

    }
    // search for the first missing number.
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] != index) {
            return index;
        }
    }
    // case 2.
    return nums.length;

}

console.log(missingNumber([5, 4, 2, 0, 3]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));