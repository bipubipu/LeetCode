/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/
 */
var findNumbers = function(nums) {
    let result = 0;
    for (let i = 0;i < nums.length; i++){
        let length = nums[i].toString().length; 
        // Other ways to count the number of digits
        // let length = String(nums[i]).length; 
        // let length = Math.log(nums[i]) * Math.LOG10E + 1 | 0; 
        if (length % 2 ==0) result++;
    }
    return result;
};

var findNumbers2 = function(nums) {
    return nums.reduce((result,i) => {
        if (String(i).length % 2 === 0) {
            return ++result;
        }
        return result;
    }, 0)
};
