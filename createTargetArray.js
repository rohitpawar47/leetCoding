// 1389. Create Target Array in the Given Order

console.log(`Create Target Array in the Given Order_`);

var createTargetArray = function (nums, index) {
    // debugger
    let target = [index.length];
    for (let i = 0; i < index.length; i++) {
        for (let j = index.length - 1; j > index[i]; j--) {
            target[j] = target[j - 1];
        }
        target[index[i]] = nums[i];
    }
    return target;
};


console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])); //[0,4,1,3,2]
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));
console.log(createTargetArray([1], [0])); 