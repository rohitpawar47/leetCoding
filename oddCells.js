// 1252. Cells with Odd Values in a Matrix

// console.log(`_Cells with Odd Values in a Matrix_`);

// console.log(`_brute force method_`);
// brute force method
// var oddCells = function (m, n, indices) {
//     let result = [[m.length], [n.length]];

//     for (let i = 0; i < indices.length; i++) {

//         // for row is constant
//         for (let j = 0; j < n; j++) {
//             result[indices[i][0]][j]++;
//         }
//         // for col is constant
//         for (let j = 0; j < m; j++) {
//             result[j][indices[i][1]]++;
//         }
//     }
//     let count = 0;
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (result[i][j] % 2 !== 0) {
//                 count++;
//             }
//         }
//     }
//     return count;

// };

// var indices = [[0, 1], [1, 1]];
// console.log(oddCells(2, 3, indices));


// optimise method

console.log(`_Optimise method_`);

var oddCells = function (m, n, indices) {
    let row = [m.length];
    let col = [n.length];

    for (let i = 0; i < indices.length; i++) {
        row[indices[i][0]] ^= true;
        col[indices[i][1]] ^= true;
    }

    let r = 0;
    let c = 0;
    for (let i = 0; i < m; i++) {
        if (row[i]) r++;
    }
    for (let i = 0; i < n; i++) {
        if (col[i]) c++;
    }

    return r * n + c * m - 2 * r * c;
}

var indices = [[0, 1], [1, 1]];
console.log(oddCells(2, 3, indices));