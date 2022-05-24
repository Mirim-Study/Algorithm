import java.lang.Math;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    int x = sc.nextInt();
    int y = sc.nextInt();
    int w = sc.nextInt();
    int h = sc.nextInt();
    
    sc.close();
    
    int width = Math.min(x, w - x);
    int height = Math.min(y, h - y);
    
    System.out.println(Math.min(width, height));
  }
}
