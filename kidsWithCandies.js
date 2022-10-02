// 1431. Kids With the Greatest Number of Candies

console.log(`Kids With the Greatest Number of Candies_`);

var kidsWithCandies = function (candies, extraCandies) {
    let ans = [];
    let maxValue = 0;

    for (let i = 0; i < candies.length; i++) {
        if (maxValue < candies[i]) {
            maxValue = candies[i];
        }
    }
    for (let j = 0; j < candies.length; j++) {
        if (maxValue <= candies[j] + extraCandies) {
            ans.push(true);
        } else {
            ans.push(false);
        }
    }
    return ans;

};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
console.log(kidsWithCandies([2, 8, 7], 1));