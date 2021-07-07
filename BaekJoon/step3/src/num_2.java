import java.util.Scanner;

public class num_2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n=scanner.nextInt();
        int [][] array = new int[2][n];
        for(int i=0; i<n; i++){
            array[0][i]=scanner.nextInt();
            array[1][i]=scanner.nextInt();
        }

        for(int i=0; i<n; i++){
            System.out.println(array[0][i]+array[1][i]);
        }
        scanner.close();
    }
}
