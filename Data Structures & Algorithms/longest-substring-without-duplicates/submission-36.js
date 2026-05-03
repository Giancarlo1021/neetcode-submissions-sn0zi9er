class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // could use a set to keep track of each letter we have encounterd in r and then delete entry in set when we move left pointer forward
        // Could use a map to check if current char in contained in the map
            // if it is we can move left pointer up 
        // always update k,v pair in our loop

        const mp = new Map();
        let res = 0, l = 0;

        for (let r = 0; r < s.length; r++) {
            if (mp.has(s[r])) {
                l = Math.max(l, mp.get(s[r])+1);
            }

            mp.set(s[r], r);
            res = Math.max(res, mp.get(s[r])+1-l);
        }
        return res;
    }
}
