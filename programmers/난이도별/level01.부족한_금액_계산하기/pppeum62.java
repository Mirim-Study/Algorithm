class Solution {
    public long solution(int price, int money, int count) {
        long answer = price;
        
        for (int i = 2; i <= count; i++) {
            answer += price * i;
        }

        return answer > money ? answer - money : 0;
    }
}
