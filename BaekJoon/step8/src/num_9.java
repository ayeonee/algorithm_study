//Fly me to the Alpha Centauri

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class num_9 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());

        for (int i = 0; i < T; i++) {
            String s = br.readLine();
            StringTokenizer st = new StringTokenizer(s);
            int x= Integer.parseInt(st.nextToken());
            int y= Integer.parseInt(st.nextToken());

            int count =0;
            int index=1;
            int preIndex=0;
            int btw = 2;
            while(index<=y-x){
                if(index-preIndex==btw){
                    count++;
                    preIndex=index;
                    btw+=2;
                }
                index++;
            }

            if(count*(count+1)-(y-x)<count) System.out.println(count*2);
            else System.out.println(count*2-1);
        }
    }
}
