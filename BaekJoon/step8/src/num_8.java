//큰 수 A+B

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class num_8 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder s = new StringBuilder(br.readLine());
        String str = s.reverse().toString();
        StringTokenizer st = new StringTokenizer(str);
        String A = st.nextToken();
        String B = st.nextToken();
        StringBuilder result = new StringBuilder();
        String longStr;
        String shortStr;
        boolean check = false;

        if(A.length()>B.length()){
            longStr = A;
            shortStr = B;
        }
        else {
            shortStr = A;
            longStr = B;
        }

        for (int i = 0; i <longStr.length(); i++) {
            if(i<shortStr.length()){
                int a = Character.getNumericValue(shortStr.charAt(i));
                int b = Character.getNumericValue(longStr.charAt(i));
                int sum = a + b;
                if (check) {
                    sum += 1;
                    check = false;
                }
                if (sum > 9) {
                    sum -= 10;
                    check = true;
                }
                result.append(sum);
            }
            else {
                int b = Character.getNumericValue(longStr.charAt(i));
                if (check) {
                    b+=1;
                    if(b>9){
                        result.append(b-10);
                        check=true;
                    }else {
                        result.append(b);
                        check = false;
                    }
                } else{
                    result.append(b);
                    check=false;
                }

            }
        }
        if(check) result.append("1");
        System.out.println(result.reverse());
    }
}
