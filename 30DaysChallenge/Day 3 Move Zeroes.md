## Challenge
https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3286/

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

## Thinking process
Because it requires to not copy the array, so we have to operate on original array. We need to remove zeros and put them at the back.
When I firstly tried, I misused remove method, which only removes the first value. 

``` Python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        l = n = len(nums)
        i = 0
        while i < n:
            if nums[i] == 0:
                nums.remove(0)
                n = n-1
                continue
            i = i+1
        nums.extend([0] * (l-len(nums)))
```

Time complexity:O(n^2). It needs n times to to iterate over the whole list. Remove method's time complexity is O(n). 
Space complexity: O(1). Only constant space is used.

## Other solutions
### Two pointer
https://leetcode-cn.com/problems/move-zeroes/solution/python3-bian-li-ti-huan-by-shan-yin-lu-de-xia-tian/
``` Python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i = j = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[j] , nums[i]= nums[i] , nums[j]
                j += 1
``` 
Time complexity: O(n）
Space complexity: O(1)

### Remove and append
In the loop, if one element is 0, it will be removed and 0 will be appended in the end.
``` Python
for num in nums:
  if num == 0:
    nums.remove(0)
    nums.append(0)
```
The code looks cleaner but it runs slower and takes more space. 
Time complexity: O(n^2）
Space complexity: O(1)

### Not for this challenge but good ways to remove zero 
The following two approaches optimis the taking out zero process. But they don't work in this case. "nums = " statement changes
the reference to nums rather than values of nums. I put them here because they work if return type is not none.
``` Python
def moveZeros(nums):
    l = [i for i in nums if i!=0]
    return l+[0]*(len(nums)-len(l))
```
``` Python
def moveZeros(nums):
     nums = sorted(nums, key=lambda x: x==0)
```
I compared the same algorithm with two languages. Java's runtime is less than Python's.
