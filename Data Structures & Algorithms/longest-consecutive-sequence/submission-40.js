class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for (let n of nums) {
            if (!set.has(n-1)) {
                let len = 1;
                while (set.has(n+len)) {
                    len++;
                }
                longest = Math.max(longest, len);
            }
        }
        return longest;
    }
}
