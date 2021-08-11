//1149 RGB 거리

import java.io.*;
import java.util.StringTokenizer;

public class num_5 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int [][] rgb = new int [N][3];
        int [][] res = new int [N][3];

        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            rgb[i][0]=Integer.parseInt(st.nextToken());
            rgb[i][1]=Integer.parseInt(st.nextToken());
            rgb[i][2]=Integer.parseInt(st.nextToken());
        }
        res[0][0]=rgb[0][0];
        res[0][1]=rgb[0][1];
        res[0][2]=rgb[0][2];

        for (int i = 1; i < N; i++) {
            res[i][0] = rgb[i][0]+Math.min(res[i-1][1],res[i-1][2]);
            res[i][1] = rgb[i][1]+Math.min(res[i-1][0],res[i-1][2]);
            res[i][2] = rgb[i][2]+Math.min(res[i-1][0],res[i-1][1]);
        }

        bw.write(Math.min(Math.min(res[N-1][0], res[N-1][1]),res[N-1][2])+"");
        bw.flush();
        bw.close();
        br.close();
    }
}
