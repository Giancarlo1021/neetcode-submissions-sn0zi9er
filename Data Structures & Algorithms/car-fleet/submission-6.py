class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pairs = [(p, s) for p, s in zip(position, speed)]

        pairs.sort(reverse=True)

        length = 1
        prev = ((target - pairs[0][0]) / pairs[0][1])
        for i in range(len(pairs)):
            curr = ((target - pairs[i][0]) / pairs[i][1])

            if curr > prev:
                length+=1
                prev = curr
        
        return length

