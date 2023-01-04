
/**
 * @param {number} n
 * @return {boolean}
 */

let isPalindromic = (numStr) => {
    let numArr = Array.from(numStr);

    for (let i = 0; i < Math.floor(numArr.length / 2); i++) {
        if (numArr[i] !== numArr[numArr.length - 1 - i])
            return false;
    }

    return true;
};

let isStrictlyPalindromic = function(n) {
    for (let base = 2; base <= n - 2; base++) {
        if (!isPalindromic(n.toString(base))) {
            return false;
        }
    }
    return true;
};
