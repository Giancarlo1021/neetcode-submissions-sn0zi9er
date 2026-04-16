class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = []
        nums.sort((a, b) => a - b)

        for (let i = 0; i < nums.length; i++) {
            let a = nums[i]
            if (a > 0) break

            if (i > 0 && nums[i-1] == a) continue

            let l = i+1
            let r = nums.length-1

            while (l < r) {
                let currSum = a + nums[l] + nums[r]

                if (currSum < 0) {
                    l++
                } 
                else if (currSum > 0) {
                    r--
                } 
                else {
                    res.push([a, nums[l], nums[r]])
                    l++
                    r--

                    while ( l < r && nums[l] == nums[l-1]) {
                        l++
                    }
                }
            }
        }
        return res
    }
}
