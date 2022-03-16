import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] numbers = new int[9];
        
        numbers[0] = sc.nextInt();
        int max = numbers[0];
        int maxIndex = 0;
        
        for(int i = 1; i < 9; i++) {
            numbers[i] = sc.nextInt();
            if(max < numbers[i]) {
                max = numbers[i];
                maxIndex = i;
            }
        }
        
        sc.close();
        
        System.out.println(max);
        System.out.println(maxIndex + 1);
    }
}
