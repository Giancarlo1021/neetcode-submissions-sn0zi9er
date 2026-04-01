class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> fq = new HashMap<>();
        List<Integer> [] count = new List[nums.length+1];

        Arrays.setAll(count, i -> new ArrayList<>());

        for (int n : nums) {
            fq.put(n, fq.getOrDefault(n, 0)+1);
        }

        fq.forEach((i,v) -> count[v].add(i));

        int[] res = new int[k];
        int idx = 0;

        for (int i = count.length-1; i >= 0; i--) {
            for (int n : count[i]) {
                res[idx++] = n;
                if (idx == k) return res;
            }
        }
        return res;
    }
}
