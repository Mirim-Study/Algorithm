import java.lang.Integer;
import java.lang.StringBuffer;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        int num;
        String binary;
        
        for(int i = 0; i < n; i++) {
            num = sc.nextInt();
            
            binary = Integer.toBinaryString(num);
            StringBuffer sb = new StringBuffer(binary);
            binary = sb.reverse().toString();
            
            for(int j = 0; j < binary.length(); j++) {
                j = binary.indexOf("1", j);
                System.out.print(j + " ");
            }
            
            System.out.println();
        }
        
        sc.close();
    }
}
