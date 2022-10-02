// 26. Remove Duplicates from Sorted Array

console.log(`_Remove Duplicates from Sorted Array_`);

var removeDuplicates = function (nums) {

    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[ans] = nums[i];
            ans++;
        }
    }
    return ans;
}

// Using set constructor.
// var removeDuplicates = function (nums) {

//     let noDup = new Set([...nums]);

//     return noDup.size;
// };


console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));