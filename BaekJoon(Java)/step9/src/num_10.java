//3053 택시 기하학

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class num_10 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        double R = Integer.parseInt(br.readLine());
        System.out.printf("%.6f\n",R*R*3.14159265358979);
        System.out.printf("%.6f",R*R*2);
    }
}
