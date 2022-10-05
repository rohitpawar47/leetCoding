// 1773. Count Items Matching a Rule

console.log(`_Count Items Matching a Rule_`);
var countMatches = function (items, ruleKey, ruleValue) {

    let count = 0;
    if (ruleKey === "type") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][0] === ruleValue) {
                count++;
            }
        }
    }
    if (ruleKey === "color") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][1] === ruleValue) {
                count++;
            }
        }
    }
    if (ruleKey === "name") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][2] === ruleValue) {
                count++;
            }
        }
    }
    return count;

};

console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver"));

console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], "type", "phone"));

