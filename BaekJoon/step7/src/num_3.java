//알파벳 찾기

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class num_3 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();
        int []alphabet = new int[26];
        Arrays.fill(alphabet,-1);

        for(int i=0; i<s.length(); i++){
            if(alphabet[s.charAt(i)-'a'] == -1)
                alphabet[s.charAt(i)-'a']=i;
        }

        for(int i=0; i<26; i++){
            System.out.println(alphabet[i]);
        }
    }
}
