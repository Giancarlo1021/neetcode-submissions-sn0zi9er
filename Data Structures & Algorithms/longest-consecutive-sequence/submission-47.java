class Solution {
    public int longestConsecutive(int[] nums) {
        HashSet <Integer> set = new HashSet<>();
        int longest = 0;

        for (int num : nums) set.add(num);

        for (int n : set) {
            if (!set.contains(n-1)) {
                int len = 1;
                while (set.contains(n++)) {
                    longest = Math.max(longest,len);
                    len++;
                }
            }
        }
        return longest;
    }
}
