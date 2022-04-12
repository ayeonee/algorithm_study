//1978 소수찾기

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class num_1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        String s =br.readLine();
        StringTokenizer st = new StringTokenizer(s);
        int count=0;
        for (int i = 0; i < N; i++) {
            int x= Integer.parseInt(st.nextToken());
            if(x==1 || (x>2 && x%2==0)) count++;
            else{
                for (int j = 3; j < x; j+=2) {
                    if(x%j==0){
                        count++;
                        break;
                    }
                }
            }
        }
        System.out.println(N-count);
    }
}
