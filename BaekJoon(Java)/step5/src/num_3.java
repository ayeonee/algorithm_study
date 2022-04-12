import java.util.Scanner;

public class num_3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a= scanner.nextInt();
        int b= scanner.nextInt();
        int c= scanner.nextInt();

        int multiple = a*b*c;
        int []result=new int[10];

        while(multiple>0){
            result[multiple%10]++;
            multiple=multiple/10;
        }

        for(int i=0; i<10; i++){
            System.out.println(result[i]);
        }
        scanner.close();
    }
}
