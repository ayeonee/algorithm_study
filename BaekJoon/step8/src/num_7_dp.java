//설탕 배달 - DP

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class num_7_dp {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        if(n<5){
            if(n==3) System.out.println(1);
            else System.out.println(-1);
        }

        int []dp = new int[n+1];
        Arrays.fill(dp, 999);
        dp[3]=1;
        dp[5]=1;
        for (int i = 6; i <=n ; i++) {
            dp[i]=Math.min(dp[i-3]+1, dp[i-5]+1);
        }
        if(dp[n]>999){
            System.out.println(-1);
        }
        else{
            System.out.println(dp[n]);
        }
    }
}
