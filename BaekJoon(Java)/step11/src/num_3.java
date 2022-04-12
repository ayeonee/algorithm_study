//7568 덩치

import java.io.*;
import java.util.StringTokenizer;

public class num_3 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int [][]data = new int[N][2];
        for (int i = 0; i < N; i++) {
            String s = br.readLine();
            StringTokenizer st = new StringTokenizer(s);
            data[i][0]=Integer.parseInt(st.nextToken());
            data[i][1]=Integer.parseInt(st.nextToken());
        }
        int count=1;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if(i==j) continue;
                if(data[i][0]<data[j][0] && data[i][1]<data[j][1])
                    count++;
            }
            bw.write(count+" ");
            count=1;
        }
        bw.flush();
        bw.close();
        br.close();
    }
}
