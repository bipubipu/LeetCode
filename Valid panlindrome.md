## Challenge
https://leetcode.com/problems/valid-palindrome/
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

## Thinking process
We can firstly remove non-alphanumeric characters. Then compare it with the reversed one.

Alternatively, we can loop from two ends until they meet.

```
var isPalindrome = function(s) {
    var s1 = s.toLowerCase().replace(/[\W_]/g,'');
  return s1===s1.split("").reverse().join("");
};
```
Another RegEX would be [^a-z0-9].

```
var isPalindrome = function(s) {
    var s1 = s.toLowerCase().replace(/[\W_]/g,'');
    let i=0, j=s1.length-1;
    while(i<j){
        if (s1[i]!=s1[j])
            return false;
        i++;
        j--;
    }    
    return true;
};
```
