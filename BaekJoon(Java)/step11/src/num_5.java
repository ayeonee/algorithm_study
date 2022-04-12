//1436 영화감독 숌

import java.io.*;

public class num_5 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        String num = "666";
        int count=0;
        while(true){
            if(num.contains("666")) {
                count++;
                if(count==N) break;
            }
            int n = Integer.parseInt(num);
            n++;
            num=String.valueOf(n);
        }
        bw.write(num+"");
        bw.flush();
        bw.close();
        br.close();
    }
}
