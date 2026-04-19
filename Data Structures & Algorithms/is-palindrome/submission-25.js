class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let [l,r] = [0, s.length-1]

        while (l < r) {
            while (l < r && !isAlpha(s[l])) {
                l++
            }

            while (l < r && !isAlpha(s[r])) {
                r--
            }

            if (s[l].toLowerCase() != s[r].toLowerCase()) return false
            l++
            r--
        }
        return true
    }
}

const isAlpha = (c) => {
    return (
        'A' <= c && c <= 'Z' ||
        'a' <= c && c <= 'z' ||
        '0' <= c && c <= '9' 
    )
}
