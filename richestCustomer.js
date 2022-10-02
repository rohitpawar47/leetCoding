// 1672. Richest Customer Wealth

console.log(`_Richest Customer Wealth_`);

const maximumWealth = function (accounts) {
    // debugger
    let maxSum = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

// var accounts = [
//     [1, 2, 3],
//     [3, 2, 1]
// ];

// var accounts = [[1, 5], [7, 3], [3, 5]];
var accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]];

console.log(maximumWealth(accounts));
