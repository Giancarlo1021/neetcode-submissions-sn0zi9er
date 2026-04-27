class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const mp = new Map();
        let l = 0, res = 0;
        for (let r = 0; r < s.length; r++) {
            if (mp.has(s[r])) {
                console.log(mp,l,mp.get(s[r]))
                l = Math.max(mp.get(s[r])+1,l);
            }
            mp.set(s[r], r);
            res = Math.max(r-l+1,res);
        }
        return res;
    }
}
