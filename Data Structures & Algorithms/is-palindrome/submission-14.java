class Solution {
    public boolean isPalindrome(String s) {
        int l = 0, r = s.length()-1;

        while (l <= r) {
            while (l < r && !isAlpha(s.charAt(l))) {
                l++;
            }

            while (r > l && !isAlpha(s.charAt(r))) {
                r--;
            }

            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;
            l++;
            r--;
        }
        return true;
    }
}

    public boolean isAlpha(char c) {
        return (
            'A' <= c && c <= 'Z' ||
            'a' <= c && c <= 'z' ||
            '0' <= c && c <= '9' 
        );
    }


// time = O(n) - n = length of array 
// space = O(1) - no DS are created, constant because only primitives are used.
