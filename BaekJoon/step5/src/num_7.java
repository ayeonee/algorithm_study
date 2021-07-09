import java.util.Arrays;
import java.util.Scanner;

public class num_7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int c= scanner.nextInt();
        double []result = new double[c];

        for(int i=0; i<c; i++){
            int n = scanner.nextInt();
            int []array=new int [n];
            double count=0;

            for(int j=0; j<n; j++){
                array[j]=scanner.nextInt();
            }
            double average = Arrays.stream(array).average().orElse(0);
            for(int j=0; j<n; j++){
                if(array[j]>average){
                    count++;
                }
            }
            result[i]=Math.round(count/n*100000.0)/1000.0;
        }

        for(double i : result){
            System.out.println(String.format("%.3f",i) + "%");
        }
        scanner.close();
    }
}
