class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, res = 0;
        // Initialize a map to store the index and value of s[r]
        let mp = new Map();

        // iterate with r, one pass
        for (let r = 0; r < s.length; r++) {
            // if the current r pointer val is in the map
                // Then we move our l val 1 past r
            if (mp.has(s[r])) {
                l = Math.max(mp.get(s[r]) + 1, l);
            }
            // add the k,v pair to the map
            mp.set(s[r], r);
            // the answer is either going to be... 
                // 1. the current res
                // 2. the current distance between the pointers + 1
            res = Math.max(res, r-l+1);
        }
        return res;
    }
}
