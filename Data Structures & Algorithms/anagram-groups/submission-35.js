class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};

        for (let s of strs) {
            let key = Array(26).fill(0);
            for (let c of s) {
                key[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}
