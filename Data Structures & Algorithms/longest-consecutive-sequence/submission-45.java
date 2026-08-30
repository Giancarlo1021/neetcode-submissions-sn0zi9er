class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = Arrays.stream(nums).boxed().collect(Collectors.toSet());
        int longest = 0;

        for (int n : set) {
            if (!set.contains(n-1)) {
                int len = 0;
                while (set.contains(n++)) {
                    len++;
                }
                longest = Math.max(longest,len);
            }
        }
        return longest;
    }
}
