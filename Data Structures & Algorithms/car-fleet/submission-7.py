class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pairs = [(p, s) for p, s in zip(position, speed)]
        pairs.sort(reverse=True)

        prev = (target - pairs[0][0]) / pairs[0][1]
        fleets = 1

        for i in range(len(pairs)):
            curr = (target - pairs[i][0]) / pairs[i][1]
            print(curr, prev)
            if curr > prev:
                fleets+=1
                prev = curr
        return fleets