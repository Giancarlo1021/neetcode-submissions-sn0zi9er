class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({length: 9}, () => new Set())
        let cols = Array.from({length: 9}, () => new Set())
        let squares = Array.from({length: 9}, () => new Set())

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let brd = board[r][c]
                if (brd === '.') continue

                let sKey = (Math.floor(r/3)*3) + Math.floor(c/3)

                if (
                    rows[r].has(brd) || cols[c].has(brd) || squares[sKey].has(brd)
                ) return false

                rows[r].add(brd)
                cols[c].add(brd)
                squares[sKey].add(brd)
            }
        }
        return true
    }
}
