//크로아티아 알파벳

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class num_9 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();

        String [] croatia = {"c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="};

        for (String value : croatia) {
            s = s.replaceAll(value, "C");
        }
        System.out.println(s.length());
    }
}
