## Challenge
https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

## Thinking process
We can brute-force this question, which is iterating the list and seeing if the other number exists in the list. So it involves
2 loops.

``` Python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)-1):
            j = target - nums[i]
            if j in nums[i+1:]:
                return [i,nums.index(j,i+1)]
        return "No solution"
```

A variation of this. I find the latter runs much slower than the first, guessing builtin method is faster.
``` Python
for j in range(i+1,len(nums)):
    if nums[j] == target - nums[i]:
        return [i,j]
```
Time complexity: O(n^2)
Space complexity: O(1)

## Other solutions
### Two-pass Hash Table
Store the numbers into the dictionary and then use it.
``` Python
    class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        pairs = {}
        for i in range(len(nums)):
            pairs[nums[i]] = i                   
        
        for i in range(len(nums)):
            complement = target - nums[i]    
        
            if (complement in pairs) & (pairs.get(complement) != i):            
                return [i,pairs.get(complement)]
        
        return "No solution"
```
Time complexity: O(n)
Space complexity: O(n)

### One-pass Hash Table
The idea is to insert the complement into the dictionary and also look back to check if current element's complement already exists in the dictionary. 

``` Python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        pairs = {}        
        for i,v in enumerate(nums): 
            if (target - v) in pairs:
                return [pairs.get(target-v),i]
            else:  
                pairs[v] = i
``` 
Time complexity: O(n)
Space complexity: O(n)
