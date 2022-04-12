//2231 분해합

import java.io.*;

public class num_2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String s = br.readLine();
        int count=s.length();
        int N =Integer.parseInt(s);

        for (int i = N-count*9; i <N ; i++) {
            int sum=i;
            int num=i;
            while(num!=0){
                sum+=num%10;
                num=num/10;
            }
            if(sum==N) {
                bw.write(i + "");
                break;
            }
            else if(i==N-1) bw.write("0");
        }
        bw.flush();
        bw.close();
        br.close();
    }
}
