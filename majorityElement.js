// 169. Majority Element

console.log(`_Majority Element_`);

const majorityElement = function (nums) {

    let candidate = 0;
    let life = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate) {
            life++;
        }
        else if (life === 0) {
            candidate = nums[i];
            life = 1;
        }
        else {
            life--;
        }
    }
    return candidate;

}


console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([1]));
console.log(majorityElement([6, 5, 5]));
console.log(majorityElement([6, 6, 6, 7, 7]));
