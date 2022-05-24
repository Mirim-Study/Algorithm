import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    int x = sc.nextInt();
    int y = sc.nextInt();
    int w = sc.nextInt();
    int h = sc.nextInt();
    
    sc.close();
    
    ArrayList<Integer> arraylist = new ArrayList<>(Arrays.asList(x, w - x, y, h - y));
    
    System.out.println(Collections.min(arraylist));
  }
}
