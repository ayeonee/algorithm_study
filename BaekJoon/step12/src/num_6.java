//11650 좌표 정렬하기

import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class num_6 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N=Integer.parseInt(br.readLine());
        int [][] coordinate = new int[N][2];
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            coordinate[i][0]=Integer.parseInt(st.nextToken());
            coordinate[i][1]=Integer.parseInt(st.nextToken());
        }

        Arrays.sort(coordinate, (x, y)->{
            if(x[0]==y[0]) return Integer.compare(x[1],y[1]);
            else return Integer.compare(x[0], y[0]);
        });

        for (int i = 0; i < N; i++) {
            bw.write(coordinate[i][0]+" "+coordinate[i][1]+"\n");
        }
        bw.flush();
        bw.close();
        br.close();
    }
}
