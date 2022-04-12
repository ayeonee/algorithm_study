//9461 파도반 수열

import java.io.*;

public class num_4 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int T = Integer.parseInt(br.readLine());
        long [] pado = new long[101];
        pado[1]=1;
        pado[2]=1;
        pado[3]=1;
        pado[4]=2;
        pado[5]=2;
        for (int i = 6; i <=100 ; i++) {
            pado[i]=pado[i-1]+pado[i-5];
        }
        for (int i = 0; i < T; i++) {
            int N = Integer.parseInt(br.readLine());
            bw.write(pado[N]+"\n");
        }
        bw.flush();
        bw.close();
        br.close();
    }
}
