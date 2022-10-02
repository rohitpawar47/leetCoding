// 1832. Check if the Sentence Is Pangram

console.log(`_Check if the Sentence Is Pangram_`);

var checkIfPangram = function (sentence) {
    // debugger
    let s = new Set()
    for (let i = 0; i < sentence.length; i++) {
        s.add(sentence[i])
    }
    return s.size === 26;
};


console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));
console.log(checkIfPangram("anmt"));
console.log(checkIfPangram("jwtucoucmdfwxxqnxzkaxoglszmfrcvjoiunqqausaxxaaijyqdqgvdnqcaihwilqkpivenpnekioyqujrdrovqrlxovcucjqzjsxmllfgndfprctxvxwlzjtciqxgsxfwhmuzqvlksyuztoetyjugmswfjtawwaqmwyxmvo"));
