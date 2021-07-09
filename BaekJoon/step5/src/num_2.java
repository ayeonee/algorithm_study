import java.util.Scanner;

public class num_2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int []array=new int[9];
        int index=0;
        int max=0;

        for (int i = 0; i < 9; i++) {
            array[i]=scanner.nextInt();
        }

        for (int i = 0; i < 9; i++) {
            if(array[i]>max){
                index=i;
                max=array[i];
            }
        }
        System.out.println(max);
        System.out.println(index+1);
    }
}
