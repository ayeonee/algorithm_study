//2798 블랙잭

import java.io.*;
import java.util.StringTokenizer;

public class num_1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String s1 = br.readLine();
        StringTokenizer st1 = new StringTokenizer(s1);
        int N = Integer.parseInt(st1.nextToken());
        int M = Integer.parseInt(st1.nextToken());
        int [] cardNum = new int[N];
        String s2=br.readLine();
        StringTokenizer st2 = new StringTokenizer(s2);
        for (int i = 0; i < N; i++)
            cardNum[i]=Integer.parseInt(st2.nextToken());

        int result=0;
        for (int i = 0; i < N; i++) {
            for (int j = 1; j < N; j++) {
                for (int k = 2; k < N; k++) {
                    int sum = cardNum[i] + cardNum[j] + cardNum[k];
                    if(k>j && j>i && sum <=M) {
                        if(result<sum) result=sum;
                    }
                }
            }
        }
        bw.write(String.valueOf(result));
        bw.flush();
        bw.close();
        br.close();
    }
}
