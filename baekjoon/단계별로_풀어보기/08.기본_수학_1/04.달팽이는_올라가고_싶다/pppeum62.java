import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int up = sc.nextInt();
        int down = sc.nextInt();
        int v = sc.nextInt();
        sc.close();
        
        int day = (v - down) / (up - down);
        if((v - down) % (up - down) != 0) day++;
        
        System.out.println(day);
    }
}
