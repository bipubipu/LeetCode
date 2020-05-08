##

Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

class Solution:
    def isHappy(self, n):
        results = [n]
        # Keep this running until the number equals 1 or the sum appears more than once.
        while 1:
            # Get every digit of the number by transforming it into a string.
            
            result = sum(int(digit) ** 2 for digit in str(n)) 
            if result == 1:
                return True
            
            # Result needs to be recorded because if it appears more than once, it means this number                 is not Happy Number
            
            elif result in results:    
                return False
            else:
                results.append(result)
                n = result
