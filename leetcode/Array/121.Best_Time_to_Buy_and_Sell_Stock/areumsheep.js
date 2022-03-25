/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const pricesLen = prices.length;
    let minValue = prices[0];
    let profit = 0;
    
    for(let i = 1; i < pricesLen; i++){
        if(minValue > prices[i]) minValue = prices[i];
        if(prices[i] - minValue > profit) profit = prices[i] - minValue;
    }
    return profit;
};
