//10870 피보나치 수 5

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class num_2 {
    public static int Fibonacci(int n){
        if(n==0) return 0;
        else if(n==1) return 1;
        return Fibonacci(n-1)+Fibonacci(n-2);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        System.out.println(Fibonacci(n));
        br.close();
    }
}
