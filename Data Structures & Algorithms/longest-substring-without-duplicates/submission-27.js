class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, res = 0;
        const mp = new Map();

        for (let r = 0; r < s.length; r++) {
            console.log(res, l, r, mp);
            if (mp.has(s[r])) {
                l = Math.max(mp.get(s[r])+1, l);
            }
            mp.set(s[r], r);
            res = Math.max(res, mp.get(s[r])-l+1)
        }
        return res;
    }
}
