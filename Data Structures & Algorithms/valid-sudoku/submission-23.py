class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = defaultdict(set) 
        cols = defaultdict(set) 
        squares = defaultdict(set)

        for r in range(9):
            for c in range(9):
                b = board[r][c]

                if b == '.': continue

                sKey = str(r//3) + " " + str(c//3)

                if b in rows[r] or b in cols[c] or b in squares[sKey]:
                    return False
                
                rows.get(r).add(b)
                cols.get(c).add(b)
                squares.get(sKey).add(b)
        return True