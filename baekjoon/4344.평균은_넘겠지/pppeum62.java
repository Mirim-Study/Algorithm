import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int cnt = sc.nextInt();
        int n;
        
        for(int i = 0; i < cnt; i++) {
            n = sc.nextInt();
            int score[] = new int[n];
            double total = 0;
            
            for(int j = 0; j < n; j++) {
                score[j] = sc.nextInt();
                total += score[j];
            }
            
            int avgStu = 0;

            for(int j = 0; j < n; j++) {
                if(score[j] > total / n) avgStu++;
            }
            
            System.out.println(String.format("%.3f", (double)avgStu / n * 100) + "%");
        }
        
        sc.close();
    }
}
