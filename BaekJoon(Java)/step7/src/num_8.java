//다이얼

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class num_8 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();
        int result=0;

        int []dial = {2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,8,8,8,9,9,9,9};
        for (int i = 0; i < s.length(); i++) {
            for(int j=0; j<26; j++){
                if(s.charAt(i)-'A'==j){
                    result += dial[j];
                }
            }
        }
        System.out.println(result+s.length());

     }
}
