import java.util.Scanner;

public class num_5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int H = scanner.nextInt();
        int M = scanner.nextInt();
        if(M<45){
            if(H==0){
                H = 23;
            }
            else{
                H = H-1;
            }
            M = M+15;
        }
        else{
            M = M-45;
        }

        System.out.println(H+" "+M);
        scanner.close();
    }
}
