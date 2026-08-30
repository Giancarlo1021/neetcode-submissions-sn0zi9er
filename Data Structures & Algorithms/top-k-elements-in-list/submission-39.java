class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap <Integer, Integer> fq = new HashMap<>();
        List<Integer>[] list = new List[nums.length + 1];
        int [] ans = new int [k];
        for (int i = 0; i < nums.length; i++) {
            fq.merge(nums[i], 1, Integer::sum);
        }
        
        fq.forEach((key, v) -> {
            if (list[v] == null) list[v] = new ArrayList<>();
            list[v].add(key);
            });

        int idx = 0;

        for (int i = list.length - 1; i >= 0 && idx < k; i--) {
            if (list[i] == null) continue;
            
            for (int j : list[i]) {
                ans[idx++] = j;

                if (idx == k) return ans;
            }
        }
        return new int[0];
    }
}
