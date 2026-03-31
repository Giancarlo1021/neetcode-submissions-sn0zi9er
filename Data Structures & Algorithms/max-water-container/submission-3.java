class Solution {
    public int maxArea(int[] heights) {
        int l = 0, r = heights.length-1;
        int maxContainer = 0;
        while (l < r) {
            int container = Math.min(heights[l], heights[r]) * Math.abs(l-r);
            maxContainer = Math.max(container, maxContainer);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return maxContainer;
    }
}
