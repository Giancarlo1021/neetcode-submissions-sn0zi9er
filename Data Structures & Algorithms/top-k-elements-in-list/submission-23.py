class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        fq = {}
        count = [[] for i in range(len(nums) + 1)]

        for n in nums:
            fq[n] = fq.get(n,0)+1
        
        for i, v in fq.items():
            count[v].append(i)
        
        res = []

        for i in range(len(count)-1,0,-1):
            for j in count[i]:
                res.append(j)

                if len(res) == k:
                    return res