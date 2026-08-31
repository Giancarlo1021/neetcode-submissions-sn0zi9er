class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap <Integer, Integer> fq = new HashMap <>();
        int[] ans = new int[k];
        List<Integer>[] bucketSort = new List[nums.length+1];

        for (int i = 0; i < bucketSort.length; i++) {
            bucketSort[i] = new ArrayList<>();
        }

        for (int i = 0; i < nums.length; i++) {
            fq.merge(nums[i], 1, (oldVal, newVal) -> oldVal+newVal);
        }

        for (Map.Entry<Integer, Integer> e : fq.entrySet()) {
            bucketSort[e.getValue()].add(e.getKey());
        }

        int idx = 0;
        for (int i = bucketSort.length-1; i > 0 && idx < k; i--) {
            for (int n : bucketSort[i]) {
                ans[idx++] = n;
                if (idx == k) return ans;
            }
        }
        return ans;
    }
}
