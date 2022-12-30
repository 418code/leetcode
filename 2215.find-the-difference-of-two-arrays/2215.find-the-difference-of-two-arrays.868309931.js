
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */



let findDifference = function(nums1, nums2) {

    let nums1Copy = [...nums1];
    let result = [];

    nums1Copy.forEach((num) => {
        if (nums2.indexOf(num) !== -1) {
            nums1 = nums1.filter((el) => el !== num);
            nums2 = nums2.filter((el) => el !== num);
        }
    });
    
    nums1 = Array.from(new Set(nums1));
    nums2 = Array.from(new Set(nums2));

    result.push(nums1);
    result.push(nums2);

    return result;
};
