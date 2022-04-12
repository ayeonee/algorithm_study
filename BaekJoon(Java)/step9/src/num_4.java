//1929 소수 구하기 - 에라토스테네스의 체

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class num_4 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();
        StringTokenizer st = new StringTokenizer(s);
        int M = Integer.parseInt(st.nextToken());
        int N = Integer.parseInt(st.nextToken());

        Boolean [] PrimeNum = new Boolean[N+1];
        Arrays.fill(PrimeNum, true);
        PrimeNum[0]=false;
        PrimeNum[1]=false;

        for (int i = 2; i*i <=N ; i++) {
            if(PrimeNum[i]){
                for (int j = i*i; j <=N ; j+=i) PrimeNum[j]=false;
            }
        }

        for (int i = M; i<=N; i++) {
            if (PrimeNum[i]) System.out.println(i);
        }
        br.close();
    }
}
