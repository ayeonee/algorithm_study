//1002 터렛

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class num_11 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        for (int i = 0; i < T; i++) {
            String s = br.readLine();
            StringTokenizer st = new StringTokenizer(s);
            int x1=Integer.parseInt(st.nextToken());
            int y1=Integer.parseInt(st.nextToken());
            int r1=Integer.parseInt(st.nextToken());
            int x2=Integer.parseInt(st.nextToken());
            int y2=Integer.parseInt(st.nextToken());
            int r2=Integer.parseInt(st.nextToken());

            double distance = Math.sqrt(Math.pow(Math.abs(x1-x2),2)+Math.pow(Math.abs(y1-y2),2));
            if(distance == 0 && r1 == r2) System.out.println("-1");
            else if(distance>r1+r2) System.out.println("0");
            else if(distance == r1+r2) System.out.println("1");
            else if(distance == Math.abs(r1-r2)) System.out.println("1");
            else if(distance < Math.abs(r1-r2)) System.out.println("0");
            else System.out.println("2");
        }
    }
}
