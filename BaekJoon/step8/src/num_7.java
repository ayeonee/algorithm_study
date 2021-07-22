//설탕 배달

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class num_7 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int result;
        int product = N/5;

        if(N%5==0) result = product;
        else if(N%5==1)
            result=(N-5*(product-1))/3 + product-1;
        else if(N%5==2){
            result = product-2;
            if(result < 0) result = -1;
            else result=(N-5*(result))/3 + result;
        }
        else if(N%5==3) result = product +1;
        else{
            result = product-1;
            if(result < 0) result = -1;
            else result=(N-5*(result))/3 + result;
        }
        System.out.println(result);
    }
}