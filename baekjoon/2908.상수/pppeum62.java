import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        StringBuffer str1 = new StringBuffer(sc.next());
        StringBuffer str2 = new StringBuffer(sc.next());
                
        sc.close();
        
        int n = Integer.parseInt(str1.reverse().toString());
        int m = Integer.parseInt(str2.reverse().toString());
        
        System.out.println(Math.max(n, m));
    }
}
