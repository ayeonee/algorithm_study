//1427 소트인사이드

import java.io.*;
import java.util.Arrays;

public class num_5 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String s = br.readLine();
        char []num=new char[s.length()];
        for (int i = 0; i < num.length; i++) num[i]=s.charAt(i);
        Arrays.sort(num);
        for (int i = num.length-1; i >=0 ; i--) bw.write(num[i]+"");
        bw.flush();
        bw.close();
        br.close();
    }
}
