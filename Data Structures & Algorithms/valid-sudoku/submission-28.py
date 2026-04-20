class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = defaultdict(set)
        cols = defaultdict(set)
        squares = defaultdict(set)

        for r in range(9):
            for c in range(9):
                brd = board[r][c]

                if brd == '.': continue

                sKey = str((r//3)) + ' ' + str((c//3))

                if (brd in rows[r] or
                    brd in cols[c] or
                    brd in squares[sKey]): return False

                rows[r].add(brd)
                cols[c].add(brd)
                squares[sKey].add(brd)
    
        return True