// Patching Array.
console.log(`_patching array_`);

const patchingArray = function (nums, n) {
    let count = 0;
    let i = 0;
    let reach = 0;
    // let reach = [];

    while (reach < n) {

        if (n >= nums.length) {
            // console.log(reach + 1);
            reach += reach + 1;
            // reach.push(reach + 1);
            count++;
        }
        else if (i < nums.length && nums[i] <= (reach + 1)) {
            reach += nums[i];
            // reach.push(nums[i]);
            i++;
        }
        else {
            // console.log(reach + 1);
            reach += reach + 1;
            // reach.push(reach + 1);
            count++;
        }


    }
    return count;
}

console.log(patchingArray([1, 3], 6));
// console.log(patchingArray([1, 5, 10], 20));

// Another way.
console.log(`_patching array (part 2)_`);

const numberOfPatches = function (nums, n) {
    let i = 0;
    let countPatches = 0;
    let sum = 1;

    while (sum <= n) {

        sum += (i < nums.length && nums[i] <= sum) ? nums[i++] : sum;
        countPatches++;
    }
    return countPatches - i;
}

console.log(numberOfPatches([1, 3], 6));
console.log(numberOfPatches([1, 5, 10], 20));
console.log(numberOfPatches([1, 2, 2], 5));