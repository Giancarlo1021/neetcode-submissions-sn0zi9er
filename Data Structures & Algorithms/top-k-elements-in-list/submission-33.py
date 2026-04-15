class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        fq = {}
        count = [[] for _ in range(len(nums)+1)]

        for n in nums:
            fq[n] = fq.get(n,0)+1
        
        for key,val in fq.items():
            count[val].append(key)
        
        res = [] * k

        print(count)

        for i in range(len(count)-1,-1,-1):
            for j in count[i]:
                res.append(j)
                if len(res) == k:
                    return res