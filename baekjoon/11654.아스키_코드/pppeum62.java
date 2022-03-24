import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    String s = sc.nextLine();
    sc.close();
    
    System.out.format("%d", (int)s.charAt(0));
  }
}
