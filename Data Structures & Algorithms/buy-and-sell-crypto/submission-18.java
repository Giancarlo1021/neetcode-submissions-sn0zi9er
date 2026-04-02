class Solution {
    public int maxProfit(int[] prices) {
        int maxP = 0;
        int np = prices[0];
        for (int p : prices) {
            maxP = Math.max((p-np),maxP);

            if (p < np) np = p;
        }
        return maxP;
    }
}
