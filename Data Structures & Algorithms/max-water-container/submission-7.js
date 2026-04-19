class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length-1
        let res = 0
        while (l < r) {
            let currSum = Math.min(heights[l], heights[r]) * (r-l)
            res = Math.max(res, currSum)

            if (heights[l] < heights[r]) {
                l++
            } else {
                r--
            }
        }
        return res
    }
}
