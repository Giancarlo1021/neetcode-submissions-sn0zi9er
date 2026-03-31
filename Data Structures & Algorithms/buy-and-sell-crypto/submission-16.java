class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit = 0;
        int minBuy = prices[0];

        for (int sell : prices) {
            maxProfit = Math.max((sell - minBuy), maxProfit);

            minBuy = Math.min(sell, minBuy);
        }
        return maxProfit;
    }
}
