## Challenge
https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3283/

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

## Thinking process
My initial thought is to compare the adjacent elements in sorted list. Things to consider include array index out of bound exception, and changing step in the loop.  
``` Python
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
```     
Python's builtin sorted method id Timsort, with  time complexity O(nlog(n)) in worst case, space complexity O(n).
The while loop has time complexity O(n), space complexity(1). 
Therefore, the overall time complexity is O(nlog(n)) and space complexity O(n).
But it doesn't satisfy linear time complexity requirement.

## Other solutions
### Bit Manipulation
a XOR 0 = a
a XOR a = 0
so (a XOR b) XOR b = a XOR (b XOR b) = a

``` Python
class Solution(object):
    def singleNumber(self, nums):
        a = 0
        for i in nums:
            a ^= i
        return a
``` 

Time complexity: O(n).
Space complexity: O(1).

### Math
2∗(a+b+c)−(a+a+b+b+c)=c
Set method can remove repetitive elements.

``` Python
class Solution(object):
    def singleNumber(self, nums):
        return 2 * sum(set(nums)) - sum(nums)
``` 

Time complexity: O(n).
Space complexity: =O(n). set needs space for the elements in nums

### Hash Table
We use hash table to avoid the O(n)O(n) time required for searching the elements.

1. Iterate through all elements in nums and set up key/value pair.
2. Return the element which appeared only once.

``` Python
from collections import defaultdict
class Solution:
    def singleNumber(self, nums) -> int:
        hash_table = defaultdict(int)
        for i in nums:
            hash_table[i] += 1
        
        for i in hash_table:
            if hash_table[i] == 1:
                return i
``` 
Time complexity : O(n). Time complexity of for loop is O(n). Time complexity of hash table(dictionary in python) operation pop is O(1).

Space complexity : O(n). The space required by hash_table is equal to the number of elements in nums.

### List operation
1. Iterate over all the elements in \text{nums}nums
2. If some number in \text{nums}nums is new to array, append it
3. If some number is already in the array, remove it

``` Python
class Solution(object):
    def singleNumber(self, nums):
        no_duplicate_list = []
        for i in nums:
            if i not in no_duplicate_list:
                no_duplicate_list.append(i)
            else:
                no_duplicate_list.remove(i)
        return no_duplicate_list.pop()
```  
Time complexity: O(n^2). Iteration takes O(n) and search also needs O(n).
Space complexity: O(n).
