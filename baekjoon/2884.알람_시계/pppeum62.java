import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    int hour = sc.nextInt();
    int minute = sc.nextInt();
    
    if(minute - 45 < 0) {
      hour = hour - 1 < 0 ? 23 : hour - 1;
      minute = 60 - (45 - minute);
    } else {
      minute -= 45;
    }
    
    System.out.println(hour + " " + minute);
    
    sc.close();
  }
}
