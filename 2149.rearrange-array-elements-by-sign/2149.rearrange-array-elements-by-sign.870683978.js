
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let rearrangeArray = function(nums) {
    let positive = nums.filter(num => num > 0);
    let negative = nums.filter(num => num < 0);
    let result = [];

    for (let i = 0; i < positive.length; i++) {
        result.push(positive[i]);
        result.push(negative[i]);
    }

    return result;
};
