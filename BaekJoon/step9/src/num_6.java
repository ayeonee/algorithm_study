//9020 골드바흐의 추측

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class num_6 {
    public static void main(String[] args) throws IOException {
        int max=10000;
        Boolean [] checkPrime = new Boolean[max+1];
        Arrays.fill(checkPrime, true);
        checkPrime[0]=false;
        checkPrime[1]=false;
        for (int i = 2; i*i <=max ; i++) {
            if(checkPrime[i]){
                for (int j = i*i; j <=max ; j+=i) checkPrime[j]=false;
            }
        }

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        for (int i = 0; i <T; i++) {
            int n = Integer.parseInt(br.readLine());
            if(n==4) System.out.println("2 2");
            else {
                int x = n / 2, y = n / 2;
                while (true) {
                    if (x % 2 == 0) {}
                    else if (checkPrime[x] && checkPrime[y]) {
                        System.out.println(x + " " + y);
                        break;
                    }
                    x -= 1;
                    y += 1;
                }
            }
        }
    }
}
