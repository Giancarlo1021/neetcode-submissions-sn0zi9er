class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = {}
        let col = {}
        let squares = {}

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const b = board[r][c]
                if (b === ".") continue
                const sKey = `${Math.floor(r/3)}` + " " + `${Math.floor(c/3)}`
                if (
                    (row[r]?.has(b) ?? (row[r] = new Set()).has(b)) ||
                    (col[c]?.has(b) ?? (col[c] = new Set()).has(b)) ||
    (squares[sKey]?.has(b) ?? (squares[sKey] = new Set()).has(b))
) return false;

                row[r].add(b)
                col[c].add(b)
                squares[sKey].add(b)
            }
        }
        return true;
    }
}
