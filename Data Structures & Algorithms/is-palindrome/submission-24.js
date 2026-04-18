class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let [l , r] = [0, s.length-1]

        while (l < r) {
            while (l < r && !this.isAlpha(s[l])) {
                l++
            }
            while (l < r && !this.isAlpha(s[r])) {
                r--
            }
            console.log(l,r,s[l], s[r])

            if (s[l].toLowerCase() != s[r].toLowerCase()) return false
            l++
            r--
        }
        return true
    }

    isAlpha(c) {
        return(
            'A' <= c && c <= 'Z' ||
            'a' <= c && c <= 'z' ||
            '0' <= c && c <= '9' 
        )
    }
}
