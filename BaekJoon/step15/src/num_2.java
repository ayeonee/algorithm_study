//9148 신나는 함수 실행

import java.io.*;
import java.util.StringTokenizer;

public class num_2 {
    static int [][][] storedW = new int[21][21][21] ;

    static int w(int a, int b, int c){
        if(a>=0 && a<=20 && b>=0 && b<=20 && c>=0 && c<=20 && storedW[a][b][c]!=0) return storedW[a][b][c];
        if(a<=0 || b<=0 || c<=0) return 1;
        if(a>20 || b>20 || c>20) return storedW[20][20][20]=w(20,20,20);
        if(a<b && b<c) return storedW[a][b][c]=w(a,b,c-1)+w(a,b-1, c-1) - w(a,b-1,c);
        else return storedW[a][b][c]=w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        while(true){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int c = Integer.parseInt(st.nextToken());

            if(a==-1 && b==-1 && c==-1) break;
            else bw.write("w("+a+", "+b+", "+c+") = "+w(a,b,c)+"\n");
        }
        bw.flush();
        bw.close();
        br.close();
    }
}
