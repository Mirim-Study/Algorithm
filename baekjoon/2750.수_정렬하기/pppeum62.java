import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        ArrayList<Integer> numbers = new ArrayList<>();
        int n = sc.nextInt();
        
        for(int i = 0; i < n; i++) {
            numbers.add(sc.nextInt());
        }
        
        sc.close();
        
        Collections.sort(numbers);
        
        for(int num : numbers) {
            System.out.println(num);
        }
    }
}
