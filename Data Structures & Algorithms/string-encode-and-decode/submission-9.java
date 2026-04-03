class Solution {

    public String encode(List<String> strs) {
        String encode = "";

        for (String s : strs) {
            encode += s.length() + "#" + s;
        }

        return encode;
    }

    public List<String> decode(String str) {
        int l = 0;
        List<String> decode = new ArrayList<>();

        while (l < str.length()) {
            int r = l;

            while (str.charAt(r) != '#') {
                r++;
            }

            String len = str.substring(l,r);
            System.out.print(len);

            l = r + 1;
            r = Integer.parseInt(len) + l;

            decode.add(str.substring(l,r));
            l = r;
        }
        
        return decode;
    }
}
