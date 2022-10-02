// // 18. 4Sum

// console.log(`_Four sum_`);

// const fourSum = function (nums, target) {
//     nums.sort();
//     const ans = [];

//     for (let i = 0; i < nums.length - 3; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         for (let j = i + 1; j < nums.length - 2; j++) {
//             if (j > i + 1 && nums[j] === nums[j - 1]) continue;

//             let start = j + 1;
//             let end = nums.length - 1;

//             while (start < end) {
//                 const sum = nums[i] + nums[j] + nums[start] + nums[end];

//                 if (sum > target) {
//                     end--;
//                 }
//                 else if (sum < target) {
//                     start++;
//                 }
//                 else {
//                     ans.push([nums[i], nums[j], nums[start], nums[end]]);
//                     while (start < end && nums[start] === nums[start + 1]) start++;
//                     while (start < end && nums[end] === nums[end - 1]) end--;
//                     start++;
//                     end--;
//                 }
//             }

//         }

//     }
//     return ans;

// }


// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// console.log(fourSum([2, 2, 2, 2, 2], 8));
// console.log(fourSum([-1, 0, -5, -2, -2, -4, 0, 1, -2], - 9));


console.log(`_Four Sum Part 2_`);

const fourSumPart2 = function (nums, target) {
    const result = [];
    if (nums.length < 4) return result;
    nums.sort((a, b) => a - b);
    const len = nums.length;

    for (let i = 0; i < len - 3; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        if (i > 0 && nums[i] + nums[i - 1]) continue;
        if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) continue;

        for (let j = i + 1; j < len - 2; j++) {
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
            if (i > i + 1 && nums[j] + nums[j - 1]) continue;
            if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) continue;

            let left = j + 1;
            let right = len - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    left++;
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    right--;
                }
                else if (sum < target) {
                    left++;
                }
                else {
                    right--;
                }
            }
        }
    }
    return result;
}

console.log(fourSumPart2([-1, 0, -5, -2, -2, -4, 0, 1, -2], -9));