//4948 베르트랑 공준

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class num_5 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int count=0;
        int max=246912;
        Boolean [] PrimeNum = new Boolean[max+1];
        Arrays.fill(PrimeNum, true);
        PrimeNum[0]=false;
        PrimeNum[1]=false;
        for (int i = 2; i*i <=max ; i++) {
            if(PrimeNum[i])
                for (int j = i*i; j <=max; j+=i) PrimeNum[j]=false;
        }
        while(true){
            int n=Integer.parseInt(br.readLine());
            if(n==0) break;
            for (int i = n+1; i <=2*n ; i++)
                if(PrimeNum[i]) count++;
            System.out.println(count);
            count=0;
        }
    }
}
