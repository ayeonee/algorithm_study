//벌집

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class num_2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int sum = 1;
        int count = 1;

        if(n==1){

        }
        else{
            while(sum<n){
                sum += count*6;
                count++;
            }
        }
        System.out.println(count);
        br.close();
    }
}
