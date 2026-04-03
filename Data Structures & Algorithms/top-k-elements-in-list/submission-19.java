class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        // create a frequency counter (fq) using a hashmap so we know how many times a certain number appears in an array
        // use that fq to populate a nested array, where we will store the number of times (the value of the fq) a number appears in...
        //... the input array
        // iterate through that bucketSort array in reverse and populate an array we will return once we go through k times

        Map<Integer, Integer> fq = new HashMap<>();
        List<Integer>[] bucketSort = new List[nums.length+1];

        for (int i = 0; i < bucketSort.length; i++) {
            bucketSort[i] = new ArrayList<>();
        }

        for (int n : nums) {
            fq.put(n, fq.getOrDefault(n, 0)+1);
        }

        fq.forEach((i, v) -> bucketSort[v].add(i));

        int[] res = new int[k];
        int idx = 0;

        for (int i = bucketSort.length-1; i >= 0; i--) {
            for (int n : bucketSort[i]) {
                res[idx++] = n;

                System.out.print(Arrays.toString(res));

                if (idx == k) return res;
            }
        }
        return res;
    }
}


// Time O(n) 
// Space O(n)
    // n = length of input array 