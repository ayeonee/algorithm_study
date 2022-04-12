import java.util.Scanner;

public class num_6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n=scanner.nextInt();
        int count=0;
        int sum=0;
        int []result = new int[n];

        for(int i=0; i<n; i++){
            String s=scanner.next();
            for(int j=0; j<s.length(); j++){
                if(s.charAt(j) == 'O'){
                    count++;
                }
                else{
                    count=0;
                }
                sum+=count;
            }
            result[i]=sum;
            count=0;
            sum=0;
        }

        for(int i:result){
            System.out.println(i);
        }
        scanner.close();
    }
}
