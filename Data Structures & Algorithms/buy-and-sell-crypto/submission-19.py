class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxP = 0
        sPrice = prices[0]
        for bPrice in prices:
            curSum = bPrice - sPrice

            print(curSum)
            
            maxP = max(maxP, curSum)

            if bPrice < sPrice:
                sPrice = bPrice
        
        return maxP