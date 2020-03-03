/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  let minPrice = 999999;
  
  for (let i = 0; i < prices.length; i++) {
      minPrice = Math.min(minPrice, prices[i]);
      max = Math.max(max, prices[i] - minPrice);
  }
  
  return max;
};