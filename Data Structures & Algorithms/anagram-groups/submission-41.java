class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap <String, List<String>> ana = new HashMap<>();

        for (String s : strs) {
            int[] key = new int[26];
            for (Character c : s.toCharArray()) {
                key[c-'a']++;
            }
            ana.computeIfAbsent(Arrays.toString(key), k -> new ArrayList<>()).add(s);
        }

        return new ArrayList<>(ana.values());
    }
}
