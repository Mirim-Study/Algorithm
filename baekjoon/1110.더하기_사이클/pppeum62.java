import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    int n = sc.nextInt();
    int result = n;
    int cnt = 0;
    
    sc.close();
    
    while(true) {
      result = ((result % 10) * 10) + (((result / 10) + (result % 10)) % 10);
      cnt++;
      
      if(n == result) break;
    }
    
    System.out.println(cnt);
  }
}
