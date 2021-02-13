import java.util.*;

public class Truck {
    int weight;
    int location;
    public Truck(int weight, int location) {
        this.weight = weight;
        this.location = location;
    }
}

class Solution {
    public int solution(int bridge_length, int weight, int[] truck_weights) {
        int answer = 0;
        List<Truck> list = new ArrayList<Truck>();
        int i = 0;
        int sum = 0;
        
        while(i < truck_weights.length){
            if(sum + truck_weights[i] <= weight) {
                list.add(new Truck(truck_weights[i], 1));
                sum += truck_weights[i];
                i++;
            }

            Iterator it = list.iterator();
            while(it.hasNext()) {
                Truck t = (Truck)it.next();
                t.location += 1;
                if(t.location > bridge_length) {
                    it.remove();
                    sum -= t.weight;
                }
            }
            answer++;
        }
        
        while(list.size() > 0) {
            Iterator it = list.iterator();
            while(it.hasNext()) {
                Truck t = (Truck)it.next();
                t.location += 1;
                if(t.location > bridge_length) {
                    it.remove();
                    sum -= t.weight;
                }
            }
            answer++;
        }
        
        return answer + 1;
    }
}
