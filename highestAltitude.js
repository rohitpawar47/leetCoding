// 1732. Find the Highest Altitude

console.log(`_Find the Highest Altitude_`);

var largestAltitude = function (gain) {
    // debugger
    let maxSum = 0;
    for (let i = gain.length; i > 0; i--) {
        let sum = 0;
        for (let j = 0; j < i; j++) {
            sum += gain[j];

        }
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
console.log(largestAltitude([44, 32, -9, 52, 23, -50, 50, 33, -84, 47, -14, 84, 36, -62, 37, 81, -36, -85, -39, 67, -63, 64, -47, 95, 91, -40, 65, 67, 92, -28, 97, 100, 81]));