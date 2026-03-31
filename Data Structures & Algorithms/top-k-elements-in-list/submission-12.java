class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        List<Integer>[] fq = new List[nums.length+1];
        Map<Integer, Integer> count = new HashMap<>();
        
        Arrays.setAll(fq, i -> new ArrayList<>());

        for(int n : nums) {
            count.put(n, count.getOrDefault(n,0)+1);
        }

        count.forEach((i,v) -> fq[v].add(i));

        int[] res = new int [k];
        int index = 0;

        for (int i = fq.length-1; i >= 0; i--) {
            for (int j : fq[i]) {
                res[index++] = j;
                if (index == k) {
                    return res;
                }
            }
        }
        return res;
    }

}