class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = [[] for _ in range(len(nums)+1)]
        fq = {}

        for n in nums:
            fq[n] = fq.get(n,0)+1
        
        for i, v in fq.items():
            count[v].append(i)

        res = [] * k

        for i in range(len(count)-1,-1,-1):
            for n in count[i]:
                res.append(n)
            if len(res) == k:
                return res

