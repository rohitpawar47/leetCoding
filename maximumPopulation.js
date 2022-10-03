// 1854. Maximum Population Year

console.log(`_Maximum Population Year_`);

var maximumPopulation = function (logs) {
    // debugger
    const count = new Array(101).fill(0);

    for (const [birth, death] of logs) {
        count[birth - 1950]++;
        count[death - 1950]--;
    }

    let max = 0;

    for (let i = 1; i < 101; i++) {
        count[i] += count[i - 1];

        if (count[i] > count[max]) max = i;
    }

    return 1950 + max;

};


console.log(maximumPopulation([[1993, 1999], [2000, 2010]]));
console.log(maximumPopulation([[1950, 1961], [1960, 1971], [1970, 1981]]));