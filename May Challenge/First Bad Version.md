## Problem
https://leetcode.com/problems/first-bad-version/

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your 
product fails the quality check. Since each version is developed based on the previous version, all the versions after
a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones 
to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the 
first bad version. You should minimize the number of calls to the API.

## Analysis
This problem is equivalent to searching. So my intuition is to use binary search method.

```
function(n) {
        let i = 1, j = n;
        while (i < j) {
        let m = Math.floor((i+j) / 2);   // There's overflow risk in (i+j)/2. So a better way to do that is use i+(j-i)/2.
        if (isBadVersion(m)) {
            j = m;
        } else {
            i = m + 1;
        }
    }
    return i;
};
```
Time complexity: O(logn).
Space complexity:O(1).
