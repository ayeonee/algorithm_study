//2447 별 찍기 - 10
//1st try : Timeout ㅠㅠ

import java.io.*;

public class num_3 {
    public static void printStar(int N, int i, int j) throws IOException{
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        if((i/N)%3==1 && (j/N)%3==1)
            bw.write(" ");
        else{
            if(N/3==0) bw.write("*");
            else printStar(N/3, i ,j);
        }
        bw.flush();
    }
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                printStar(N, i, j);
            }
            System.out.println();
        }
        br.close();
    }
}
