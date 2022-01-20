import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        ArrayList<Integer> scores = new ArrayList<>();
        
        for(int i = 0; i < n; i++) {
            scores.add(sc.nextInt());
        }
        
        sc.close();
        
        double max = Collections.max(scores);
        double total = 0;
        
        for(int i : scores) {
            total += i / max * 100;
        }
        
        System.out.println(total / n);
    }
}
