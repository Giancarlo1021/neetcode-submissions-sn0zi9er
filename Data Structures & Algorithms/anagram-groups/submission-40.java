class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // create a map and create an empty array of 26 len
        // make a key with array using chatAt and compare the value of char to 'a'
        // if key exist, add string to key or else create it 
        // return map as a nested list

        Map<String, List<String>> res = new HashMap<>();

        for (String s: strs) {
            int[] count = new int[26];
            for (char c:s.toCharArray()) {
                count[c-'a']++;
            }
            String key = Arrays.toString(count);
            res.putIfAbsent(key, new ArrayList<>());
            res.get(key).add(s);
        }
        return new ArrayList<>(res.values());
    }
}
