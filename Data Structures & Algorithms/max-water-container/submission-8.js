class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0, l = 0, r = heights.length-1;

        while (l < r) {
            const container = (r-l) * Math.min(heights[l], heights[r]);

            console.log(res, container)
            res = Math.max(res, container);
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return res;
    }
}
