//Fly me to the Alpha Centauri
//어려워씀 ㅠㅠ

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class num_9 {
    public static void calculate(int minus){
        long sum=0;
        long count =0;
        while(minus > sum){
            sum+=count*2;
            count++;
        }
        count-=1;

        if(count*(count+1)-minus<count) System.out.println(count*2);
        else System.out.println(count*2-1);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());

        for (int i = 0; i < T; i++) {
            String s = br.readLine();
            StringTokenizer st = new StringTokenizer(s);
            int x= Integer.parseInt(st.nextToken());
            int y= Integer.parseInt(st.nextToken());
            int minus = y-x;
            if(minus == 1) {
                System.out.println("1");
            }
            else {
                calculate(minus);
            }
        }
    }
}
