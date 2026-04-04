class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        int longest = 0;

        for (int n : nums) {
            set.add(n);
        }

        for (int n : nums) {
            if (!set.contains(n-1)) {
                int streak = 1;
                while (set.contains(n+streak)) {
                    streak++;
                }
                longest = Math.max(streak,longest);
            }
        }
        return longest;
    }
}
