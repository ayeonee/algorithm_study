//1904 타일

import java.io.*;

public class num_3 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        if(N==1) {
            bw.write("1");
            bw.flush();
            bw.close();
            br.close();
            return;
        }
        int [] ans = new int[N+1];
        ans[1]=1;
        ans[2]=2;
        for (int i = 3; i <= N; i++) {
            ans[i]=(ans[i-1]+ans[i-2])%15746;
        }
        bw.write(ans[N]+"");
        bw.flush();
        bw.close();
        br.close();
    }
}
