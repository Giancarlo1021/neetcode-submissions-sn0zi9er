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

            System.out.print(s.charAt(l) + " " + s.charAt(r));
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
    };
