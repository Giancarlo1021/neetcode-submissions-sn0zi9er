class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const mp = new Map();
        let res = 0, l = 0;

        for (let r = 0; r < s.length; r++) {
            if (mp.has(s[r])) {
                console.log(l,mp.get(s[r]))
                l = Math.max(l, mp.get(s[r])+1);
            }

            mp.set(s[r], r);
            console.log("res ", res)
            res = Math.max(res, mp.get(s[r])-l+1)
        }
        return res;
    }
}
