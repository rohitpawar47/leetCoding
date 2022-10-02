// 989. Add to Array-Form of Integer

console.log(`_989. Add to Array-Form of Integer_`);

var addToArrayForm = function (num, k) {
    // debugger
    let arr = [];
    let i = num.length - 1;

    while (i >= 0 || k > 0) {
        if (i >= 0) {
            arr.push((num[i] + k) % 10);
            k = Math.floor((num[i] + k) / 10);
        } else {
            arr.push(k % 10);
            k = Math.floor(k / 10);
        }
        i--;
    }
    return arr.reverse();

};

console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([2, 1, 5], 806));
console.log(addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516));