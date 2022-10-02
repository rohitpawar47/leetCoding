// 167. Two Sum II - Input Array Is Sorted

console.log(`_Two Sum II_`);

const twoSum = function (numbers, target) {

    let [start, end] = [0, numbers.length - 1];

    while (start < end) {
        const sum = numbers[start] + numbers[end];

        if (target > sum) start++;

        else if (target < sum) end--;

        else return [start + 1, end + 1];
    }

}

console.log(twoSum([2, 4, 7, 10, 13, 20], 15));
console.log(twoSum([2, 7, 11, 15], 9));