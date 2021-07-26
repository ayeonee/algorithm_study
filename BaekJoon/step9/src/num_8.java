//3009 네 번째 점

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class num_8 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s1=br.readLine();
        String s2=br.readLine();
        String s3=br.readLine();
        StringTokenizer st = new StringTokenizer(s1);
        int x1=Integer.parseInt(st.nextToken());
        int y1=Integer.parseInt(st.nextToken());
        st = new StringTokenizer(s2);
        int x2=Integer.parseInt(st.nextToken());
        int y2=Integer.parseInt(st.nextToken());
        st = new StringTokenizer(s3);
        int x3=Integer.parseInt(st.nextToken());
        int y3=Integer.parseInt(st.nextToken());

        if(x1==x2) System.out.print(x3+" ");
        else if(x1==x3) System.out.print(x2+" ");
        else System.out.print(x1+" ");

        if(y1==y2) System.out.print(y3);
        else if(y1==y3) System.out.print(y2);
        else System.out.print(y1);
    }
}
