//Median of Two Sorted Arrays
console.log(`_Median of Two Sorted Arrays (self)_`);

const findMedianSortedArrays = function (nums1, nums2) {

    let mArr = nums1.concat(nums2);
    mArr.sort((a, b) => a - b);

    let s = 0;
    let e = mArr.length - 1;

    while (s <= e) {

        let m = Math.floor(s + (e - s) / 2);

        if (mArr.length % 2 === 0) {

            return (mArr[m] + mArr[m + 1]) / 2;
        }
        else {

            return mArr[m];
        }
    }

}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 3], [2, 7]));
console.log(findMedianSortedArrays([], [1]));
