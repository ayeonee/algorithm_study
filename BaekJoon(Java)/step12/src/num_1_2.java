//2750, 2751 수 정렬하기, 수 정렬하기 2

import java.io.*;
import java.util.Arrays;

public class num_1_2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N=Integer.parseInt(br.readLine());
        int []num=new int[N];
        for (int i = 0; i < N; i++)
            num[i]=Integer.parseInt(br.readLine());
        Arrays.sort(num);
        for (int i: num) bw.write(i+"\n");
        bw.flush();
        bw.close();
        br.close();
    }
}
