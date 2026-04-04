class Solution {

    public String encode(List<String> strs) {
        String encode = "";

        for (String s : strs) {
            encode+= s.length() + "#" + s;
        }

        return encode;
    }

    public List<String> decode(String str) {
        List<String> decode = new ArrayList<>();
        int l = 0;

        while (l < str.length()) {
            int r = l;
            while (str.charAt(r) != '#') {
                r++;
            }

            int len = Integer.parseInt(str.substring(l,r));

            l = r + 1;
            r = len + l;

            decode.add(str.substring(l,r));
            l = r;
        }
        return decode;
    }
}
