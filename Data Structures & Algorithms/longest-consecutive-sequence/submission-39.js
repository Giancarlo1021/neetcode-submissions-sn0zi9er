class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let res = 0;

        for (let n of nums) {
            if (!set.has(n-1)) {
                let len = 1;
                while (set.has(n+len)) {
                    len++;
                }
                res = Math.max(res, len);
            }
        }
        return res;
    }
}
