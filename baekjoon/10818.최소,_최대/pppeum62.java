import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        ArrayList<Integer> numbers = new ArrayList<>();
        
        for(int i = 0; i < n; i++) {
            numbers.add(sc.nextInt());
        }
        
        sc.close();
        
        System.out.println(Collections.min(numbers) + " " + Collections.max(numbers));
    }
}
