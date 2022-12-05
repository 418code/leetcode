
/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let digits = Array.from(String(num));
    digits.sort();
    let first = digits.shift();
    let second = digits.shift();
    first = Number(first.concat(digits.shift()));
    second = Number(second.concat(digits.shift()));
    return first + second;
};
