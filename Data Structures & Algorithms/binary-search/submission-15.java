class Solution {
    public int search(int[] nums, int target) {
        int l = 0, r = nums.length-1;

        while (l <= r) {
            int m = l + ((r-l) / 2);
            System.out.print(nums[m] + " " + m);
            if (nums[m] < target) {
                l++;
            } else if (nums[m] > target) {
                r--;
            } else {
                return m;
            }
        }
        return -1;
    }
}
