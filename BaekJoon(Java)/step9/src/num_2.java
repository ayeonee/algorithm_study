//2581 소수

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class num_2 {
    public static boolean checkPrime (int n){
        boolean result = true;
        for (int i = 3; i <n ; i+=2) {
            if(n%i==0) {
                result= false;
                break;
            }
        }
        return result;
    }
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int M = Integer.parseInt(br.readLine());
        int N = Integer.parseInt(br.readLine());

        int sum=0;
        int min=9999;
        for (int i = M; i <= N; i++) {
            if(i==1){}
            else if(i==2){
                sum+=2;
                min=2;
            }
            else if(i%2!=0){
                if(checkPrime(i)){
                    min=Math.min(min, i);
                    sum+=i;
                }
            }
        }
        if(sum==0) System.out.println("-1");
        else System.out.println(sum +"\n"+min);
    }
}
