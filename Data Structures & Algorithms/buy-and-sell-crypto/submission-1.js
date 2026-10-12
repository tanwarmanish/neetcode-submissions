class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let maxProfit = 0;
       let min = prices[0];
       for(let i=1;i<prices.length;i++){
            let profit = Math.max(prices[i]-min,0);
            maxProfit = Math.max(maxProfit,profit);
            min = Math.min(min,prices[i]);
       }
       return maxProfit;
    }
}
