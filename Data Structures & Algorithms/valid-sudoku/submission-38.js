class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: 9}, () => new Set());
        const cols = Array.from({length: 9}, () => new Set());
        const squares = Array.from({length: 9}, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const b = board[r][c];
                if (b === ".") continue;

                const sKey = Math.floor(r/3) * 3 + Math.floor(c/3);

                if (
                    rows[r].has(b) ||
                    cols[c].has(b) ||
                    squares[sKey].has(b) 
                ) return false;

                rows[r].add(b);
                cols[c].add(b);
                squares[sKey].add(b);
            }
        }
        return true;
    }
}
