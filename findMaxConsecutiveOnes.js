 /**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let arr = nums.join('').split("0");
    return Math.max(...arr.map(s=>s.length));
};

 /**
 * This question can be summarised as finding the longest element in an array.
 * https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/
 * The next method is slower.
 */
 
 var findMaxConsecutiveOnes2 = function(nums) {
    return nums.join('').split("0").reduce((result, val) => Math.max(result, val.length), 0);
 }   
