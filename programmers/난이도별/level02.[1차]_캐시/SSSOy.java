import java.util.ArrayList;

class Solution {
    public int solution(int cacheSize, String[] cities) {
        int answer = 0;
        ArrayList<String> cache = new ArrayList<>();
        
        for (String city : cities) {
            city = city.toLowerCase();
            int hitIndex = cache.indexOf(city);
            
            if (hitIndex > -1) {
                answer += 1;
                cache.remove(hitIndex);
                cache.add(city);
            } else {
                answer += 5;
                if (cacheSize > 0) {
                    if (cache.size() >= cacheSize) {
                        cache.remove(0);
                    }
                    cache.add(city);
                }
            }
        }
        
        return answer;
    }
}
