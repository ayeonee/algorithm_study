//문자열 반복

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class num_4 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        String []p = new String[t];
        ArrayList<String> newStr = new ArrayList<>();

        for (int i = 0; i < t; i++) {
            String s = br.readLine();
            StringTokenizer st = new StringTokenizer(s);

            int r = Integer.parseInt(st.nextToken());
            String str = st.nextToken();

            for(int j=0; j<str.length(); j++){
                for(int k=0; k<r; k++){
                    newStr.add(Character.toString(str.charAt(j)));
                }
            }
            p[i]=String.join("", newStr);
            newStr.clear();
        }

        for (String i: p) {
            System.out.println(i);
        }

        br.close();
    }
}
