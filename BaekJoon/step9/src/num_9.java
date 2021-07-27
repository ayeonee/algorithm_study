//4153 직각삼각형

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class num_9 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        while(true){
            String s = br.readLine();
            StringTokenizer st = new StringTokenizer(s);
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            int z = Integer.parseInt(st.nextToken());

            if(x==0 && y==0 && z==0) break;
            int []array = {x, y, z};
            Arrays.sort(array);
            if(array[2]*array[2]==array[1]*array[1]+array[0]*array[0]) System.out.println("right");
            else System.out.println("wrong");
        }
    }
}
