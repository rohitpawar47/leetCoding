// 1304. Find N Unique Integers Sum up to Zero

console.log(`_Find N Unique Integers Sum up to Zero_`);

var sumZero = function (n) {
    // debugger
    let arr = [];

    if (n % 2 === 0) {
        for (let i = 0; i < n - 1; i = i + 2) {
            arr[i + 1] = i + 1;
            arr[i] = -(i + 1);
        }
    } else {
        for (let i = 0; i < n - 1; i = i + 2) {
            arr[i] = i + 1;
            arr[i + 1] = -(i + 1)
        }
        arr[n - 1] = 0;
    }
    return arr;

};

console.log(sumZero(5));
console.log(sumZero(3));
console.log(sumZero(1));
console.log(sumZero(4));