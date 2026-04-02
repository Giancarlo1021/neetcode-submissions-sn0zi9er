class Solution {
    public boolean isPalindrome(String s) {
        int l = 0, r = s.length()-1;

        s = s.toLowerCase();

        while (l < r) {
            while (l < r && !isAlpha(s.charAt(l))) {
                l++;
            }

            while (r > l && !isAlpha(s.charAt(r))) {
                r--;
            }

            System.out.print(l + " " + r);

            if (s.charAt(l) != s.charAt(r)) return false;

            l++;
            r--;
        }
        return true;
    }
}

    public boolean isAlpha(char c) {
        return (
            c >= 'A' && c <= 'Z' ||
            c >= 'a' && c <= 'z' ||
            c >= '0' && c <= '9' 
        );
    }
