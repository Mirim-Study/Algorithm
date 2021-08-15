class Solution {
    public long solution(int price, int money, int count) {
        long answer = 0;
        long priceSum = price;
        
        for(int i = 2; i <= count; i++)
            priceSum += (price * i);
        
        answer = money - priceSum > 0? 0 : (money - priceSum) * (-1);
        
        return answer;
    }
}
