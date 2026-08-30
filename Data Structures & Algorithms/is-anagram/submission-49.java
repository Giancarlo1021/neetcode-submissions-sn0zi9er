class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;
        HashMap<Character, Integer> ana1 = new HashMap<>();
        HashMap<Character, Integer> ana2 = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            ana1.merge(s.charAt(i), 1, (oldVal, newVal) -> oldVal+newVal);
            ana2.merge(t.charAt(i), 1, (oldVal, newVal) -> oldVal+newVal);
        }

        return ana1.equals(ana2);
    }
}
