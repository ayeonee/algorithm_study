import java.util.Arrays;
import java.util.Scanner;

public class num_1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n= scanner.nextInt();
        int []array = new int[n];

        for(int i=0; i<n; i++){
            array[i]=scanner.nextInt();
        }

        Arrays.sort(array);
        System.out.print(array[0]+" "+array[n-1]);
    }
}
