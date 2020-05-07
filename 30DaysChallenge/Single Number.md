## Challenge
https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3283/

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

## My solution
''' Python
class Solution:
    def singleNumber(self, nums):
        nums_n = sorted(nums)
        i = 0
        while i < len(nums) -1:
            if nums_n[i]!= nums_n[i+1]:
                return nums_n[i]
                i+=1
            else:
                i+=2
        return nums_n[-1]
'''      
