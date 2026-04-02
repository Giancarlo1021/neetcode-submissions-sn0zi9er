class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length()  != t.length()) return false;
        int[] key = new int[26];
        
        for (int i = 0; i < s.length(); i++) {
            key[s.charAt(i) - 'a']++;
            key[t.charAt(i) - 'a']--;
        }
        
        return Arrays.stream(key).allMatch((i) -> i == 0);
    }
}
