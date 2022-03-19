import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] alphabet = { "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" };
        String str = sc.nextLine();
        
        sc.close();
        
        for(String find : alphabet) {
            System.out.print(str.indexOf(find) + " ");
        }
    }
}
