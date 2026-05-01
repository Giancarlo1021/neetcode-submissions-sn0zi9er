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
                l = Math.max(mp.get(s[r])+1, l);
            }
            mp.set(s[r], r);
            res = Math.max(mp.get(s[r])+1-l, res);
        }
        return res;
    }
}


// z x y z x y z
//         r 
//     l
// mp{z:4, x:5, y:2, }
// res = 3