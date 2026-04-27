class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = Array.from({length: 9}, () => new Set());
        const col = Array.from({length: 9}, () => new Set());
        const squares = Array.from({length: 9}, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const b = board[r][c];
                if (b === '.') continue;

                const sKey = Math.floor(r/3) * 3 + Math.floor(c/3);

                if (
                    row[r].has(b) || 
                    col[c].has(b) || 
                    squares[sKey].has(b)
                ) return false;

                row[r].add(b);
                col[c].add(b);
                squares[sKey].add(b);
            }
        }
        return true;
    }
}
