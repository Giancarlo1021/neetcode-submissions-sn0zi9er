class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0
        let sPrice = prices[0]
        for (let bPrice of prices) {
            console.log(bPrice, sPrice)
            let profit = bPrice - sPrice
            maxP = Math.max(maxP, profit)
            if (bPrice < sPrice) {
                sPrice = bPrice
            }
        }
        return maxP
    }
}
