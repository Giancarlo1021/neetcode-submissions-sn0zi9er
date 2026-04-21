class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []
        res = [0 for _ in range(len(temperatures))]

        for i, v in enumerate(temperatures):
            temp = v
            while stack and temp > stack[-1][1]:
                [tIdx, tVal] = stack.pop()
                res[tIdx] = i - tIdx
            stack.append([i,temp])
        return res
        