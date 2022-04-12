import java.util.Scanner;

public class num_2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int x=scanner.nextInt();
        if(x>=90)
            System.out.println("A");
        else if(x>=80)
            System.out.println("B");
        else if(x>=70)
            System.out.println("C");
        else if(x>=60)
            System.out.println("D");
        else
            System.out.println("F");

        scanner.close();
    }
}
