// 525. Contiguous Array
console.log(`_Longest contiquous subarray_`);

const largestSubArray = function (nums) {

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let zeros = 0;
        let ones = 0;

        for (let j = i; j < nums.length; j++) {
            if (nums[j] === 0) {
                zeros++;
            }
            else {
                ones++;
            }
            if (zeros === ones) {
                count = Math.max(count, j - i + 1);
            }
        }
    }
    return count;
}

// console.log(largestSubArray([0, 1, 0, 0, 1, 1, 1, 1]));
// console.log(largestSubArray([0, 1]));


// Optimize approch ..
console.log(`_Longest contiquous subarray (using hashmap)_`);

const findMaxLength = function (nums) {

    let mp = new Map();
    mp.set(0, -1);

    let count = 0;
    let maxLen = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count += -1;
        }
        else {
            count += 1;
        }
        if (mp.has(count)) {
            maxLen = Math.max(maxLen, i - mp.get(count));
        }
        else {
            mp.set(count, i)
        }

    }
    return maxLen;
}
console.log(findMaxLength([0, 1, 0, 0, 1, 1, 1, 1]));
// console.log(findMaxLength([0, 1]));
// console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]));