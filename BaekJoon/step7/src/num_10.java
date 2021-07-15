//그룹 단어 체커

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class num_10 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int [] alphabet = new int[26];
        int count = 0;

        for (int i = 0; i < n; i++) {
            String s = br.readLine();

            for (int j = 0; j < s.length(); j++) {
                for (int k = 0; k < 26; k++) {
                    if(s.charAt(j)-'a' == k ){
                        alphabet[k]++;
                    }
                }
            }

            for (int j = 0; j < 26; j++) {
                if(alphabet[j]>1){
                    int firstIndex = s.indexOf((char)(j+'a'));
                    int lastIndex = s.lastIndexOf((char)(j+'a'));

                    if((lastIndex-firstIndex+1)!=alphabet[j]){
                        count++;
                        break;
                    }
                }
            }
            Arrays.fill(alphabet,0);
        }
        System.out.println(n-count);
    }
}
