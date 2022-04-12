//1181 단어 정렬

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;

public class num_8 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N=Integer.parseInt(br.readLine());
        HashSet<String> input = new HashSet<>(N);
        for (int i = 0; i < N; i++) input.add(br.readLine());
        ArrayList<String> words = new ArrayList<>(input);
        String[] arrWords = new String[words.size()];
        words.toArray(arrWords);
        Arrays.sort(arrWords, (x,y)->{
            if(x.length()==y.length()) return x.compareTo(y);
            else return x.length()-y.length();
        });
        for (String s: arrWords) {
            bw.write(s+"\n");
        }
        bw.flush();
        bw.close();
        br.close();
    }
}
