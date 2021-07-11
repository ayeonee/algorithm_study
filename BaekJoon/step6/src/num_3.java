import java.util.Scanner;

public class num_3 {
    public static boolean calculate(int n){
        int[] array = new int[3];
        int count=0;
        while(n!=0){
            array[count]=n%10;
            n=n/10;
            count++;
        }

        return array[0]-array[1] == array[1]-array[2];
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();

        if(n>=100){
            if(n==1000){
                n=999;
            }
            int count=0;
            for(int i=100; i<=n; i++){
                if(calculate(i))
                    count++;
            }
            System.out.println(99+count);
        }
        else{
            System.out.println(n);
        }
    }
}
