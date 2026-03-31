class Solution {
    public boolean isValidSudoku(char[][] board) {
        Map<Integer, Set<Character>> rows = new HashMap<>();
        Map<Integer, Set<Character>> cols = new HashMap<>();
        Map<String, Set<Character>> squares = new HashMap<>();

        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                char b = board[r][c];
                if (b == '.') continue;

                String sKey = (r/3) + " " + (c/3);

                if (
                    rows.computeIfAbsent(r, k -> new HashSet()).contains(b) || 
                    cols.computeIfAbsent(c, k -> new HashSet()).contains(b) || 
                    squares.computeIfAbsent(sKey, k -> new HashSet()).contains(b)  
                ) return false;

                rows.get(r).add(b);
                cols.get(c).add(b);
                squares.get(sKey).add(b);
            }
        }
        return true;
    }
}
