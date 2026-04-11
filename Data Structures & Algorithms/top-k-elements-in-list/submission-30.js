class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const fq = {}
        const count = Array.from({length: nums.length+1}, () => [])

        for (let n of nums) {
            fq[n] = (fq[n] || 0) + 1
        }

        for (const [key, val] of Object.entries(fq)) {
            count[val].push(key)
        }

        const res = []
        for (let i = count.length-1; i >= 0; i--) {
            console.log(i)
            for (let n of count[i]) {
                console.log(n)
                res.push(n)
                if (res.length === k) return res
            }
        }
    }
}
