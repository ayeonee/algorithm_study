//10989 수 정렬하기 3

import java.io.*;

public class num_3 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N=Integer.parseInt(br.readLine());
        int []num=new int[10001];
        for (int i = 0; i < N; i++)
            num[Integer.parseInt(br.readLine())]++;
        for (int i = 1; i <10001; i++) {
            for (int j = 0; j < num[i]; j++)
                bw.write(i+"\n");
        }
        bw.flush();
        bw.close();
        br.close();
    }
}
