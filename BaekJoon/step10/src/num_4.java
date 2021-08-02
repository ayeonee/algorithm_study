//11729 하노이 탑 이동 순서

import java.io.*;

public class num_4 {
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static void Hanoi(int N, int start, int mid, int end) throws IOException{
        if(N==1){
            bw.write(start+" "+end+"\n");
            return;
        }

        Hanoi(N-1, start, end, mid);
        bw.write(start+" "+end+"\n");
        Hanoi(N-1, mid, start, end);
    }
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        bw.write((int)Math.pow(2,N)-1+"\n");
        Hanoi(N,1,2,3);
        br.close();
        bw.flush();
        bw.close();
    }
}
