//분수찾기

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class num_3 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int X = Integer.parseInt(br.readLine());
        int sum = 0;
        int count = 0;

        int a = 0; // 정답 분자
        int b = 0; // 정답 분모

        while (X > sum) {
            sum += count;
            count++;
        }
        X = sum - X;
        count = count - 2;

        if (count % 2 != 0) {
            for (int i = 0; i <= count; i++) {
                if (i == X) {
                    b = i + 1;
                    a = count - i + 1;
                    break;
                }
            }

        }
        else {
            for (int i = 0; i <= count; i++) {
                if (i == X) {
                    a = i + 1;
                    b = count - i + 1;
                    break;
                }
            }
        }
        System.out.println(a + "/" + b);
        br.close();
    }

}