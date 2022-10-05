// 88. Merge Sorted Array

console.log(`_Merge Two Sorted Array_`);


const mergeSortedArray = function (nums1, m, nums2, n) {
    // debugger

    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {

        if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j];
            k--;
            j--;
        }

        else {
            nums1[k] = nums1[i];
            k--;
            i--;
        }
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
    while (i >= 0) {
        nums1[k] = nums1[i];
        k--;
        i--;
    }
};



let nums1 = [0];
let nums2 = [1];
let m = 0;
let n = 1;
mergeSortedArray(nums1, m, nums2, n);

console.log(nums1);
// mergeSortedArray([1], 1, [], 0);
// mergeSortedArray([0], 0, [1], 1);
