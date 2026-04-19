class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = [] # Temps, index of temps
        res = [0 for _ in range(len(temperatures))]
        print(res)

        for i, v in enumerate(temperatures):
            while stack and stack[len(stack)-1][0] < v:
                tVal, tIdx = stack.pop()
                res[tIdx] = i - tIdx
            stack.append([v,i])
        return res