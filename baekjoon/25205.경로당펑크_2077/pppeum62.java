import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    // ㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣㅐㅔ 자판의 알파벳
    String vowel = "kijuhynbmlop";
    
    int n = sc.nextInt();
    String username = sc.next();
    
    sc.close();
    
    System.out.println(vowel.contains(username.substring(n - 1, n)) ? 0 : 1);
  }
}
