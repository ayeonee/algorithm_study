//단어 공부

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class num_5 {
    static void solution(String word){
        int []alphabet = new int[26];

        for(int i=0; i<word.length(); i++){
            for(char j='A'; j<='Z'; j++){
                if(word.charAt(i)==j)
                    alphabet[j-'A']++;
            }
        }
        int max = -1;
        int index = 0;

        for(int i=0; i<26; i++){
            if(alphabet[i]>max){
                max=alphabet[i];
                index=i;
            }
            else if(alphabet[i] == max){
                index=-1;
            }
        }

        if(index==-1)
            System.out.println("?");
        else
            System.out.println((char)(index + 65));
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String word = br.readLine();
        word = word.toUpperCase();

        if(word.length()==1){
            System.out.println(word);
        }

        else
            solution(word);
    }
}
