// 1295. Find Numbers with Even Number of Digits

console.log(`_Find Numbers with Even Number of Digits_`);

var findNumbers = function (nums) {
    // debugger

    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        // let count = Math.floor(Math.log10(nums[i]) + 1);

        if (nums[i].toString().length % 2 === 0) {
            ans++;
        }

    }
    return ans;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
console.log(findNumbers([437, 315, 322, 431, 686, 264, 442]));
