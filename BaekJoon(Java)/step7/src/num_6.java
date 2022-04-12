//단어의 개수

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class num_6 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();
        int count=0;

        for (int i = 0; i < s.length(); i++) {
            if(s.charAt(i)==' '){
               count++;
            }
        }

        if(s.charAt(0)==' ' && s.charAt(s.length()-1)==' '){
            System.out.println(count-1);
        }
        else if(s.charAt(0)!=' ' && s.charAt(s.length()-1)!=' '){
            System.out.println(count+1);
        }
        else
            System.out.println(count);
    }
}
