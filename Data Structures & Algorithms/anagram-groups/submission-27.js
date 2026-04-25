class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};

        for (let s of strs) {
            let count = Array.from({length: 26}, () => 0);
            for (let c of s) {
                count[c.charCodeAt(0)-'a'.charCodeAt(0)]++
            }
            if (!res[count]) {
                res[count] = []
                res[count].push(s)
            } else {
                res[count].push(s)
            }
        }
        return Object.values(res);
        
    }
}
