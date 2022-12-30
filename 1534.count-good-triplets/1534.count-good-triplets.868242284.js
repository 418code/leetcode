
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
"use strict";

let countGoodTriplets = function(arr, a, b, c) {
    let result = [];
    for (let k = arr.length - 1; k >= 0; k-- ) {
        for (let j = k - 1; j >=0; j--) {
            for (let i = j - 1; i >= 0; i--) {
                if ((Math.abs(arr[i] - arr[j]) <= a) && (Math.abs(arr[j] - arr[k]) <= b) && (Math.abs(arr[i] - arr[k]) <=c )) {
                    result.push([arr[i],arr[j],arr[k]]);
                }
            }
        }
    }

    return result.length;
};
