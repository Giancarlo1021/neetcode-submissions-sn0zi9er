class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let fq = {};
        let count = Array.from({length: nums.length+1}, () => []);

        for (const n of nums) {
            fq[n] = (fq[n] || 0) + 1
        };

        for (const [k,v] of Object.entries(fq)){
            count[v].push(k);
        }

        let res = [];

        for (let i = nums.length; i >= 0; i--) {
            for (let j of count[i]) {
                res.push(j);

                if (res.length === k) return res;
            }
        }
        return res;
    }
}
