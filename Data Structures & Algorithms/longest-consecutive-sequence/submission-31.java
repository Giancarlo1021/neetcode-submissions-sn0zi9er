class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int n : nums) {
            set.add(n);
        }

        int longest = 0;

        for (int n : nums) {
            // we are checking if this is the FIRST num in the sequence
            if (!set.contains(n-1)) {
                int sequence = 1;
                while (set.contains(n+sequence)) {
                    sequence++;
                }
                longest = Math.max(longest,sequence);
            }
        }
        return longest;
    }
}
