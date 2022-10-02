// 1217. Minimum Cost to Move Chips to The Same Position

console.log(`_Minimum Cost to Move Chips to The Same Position_`);

var minCostToMoveChips = function (position) {

    let even = 0;
    let odd = 0;
    for (let i of position) {
        if (i % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    if (even === position.length || odd === position.length) {
        return 0;
    }

    return Math.min(even, odd);
};

console.log(minCostToMoveChips([1, 2, 3]));
console.log(minCostToMoveChips([2, 2, 2, 3, 3]));
console.log(minCostToMoveChips([1, 1000000000]));
console.log(minCostToMoveChips([2, 3, 3]));