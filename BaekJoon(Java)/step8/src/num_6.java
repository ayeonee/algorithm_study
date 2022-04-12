//부녀회장이 될테야

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class num_6 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());

        for (int i = 0; i < T; i++) {
            int k = Integer.parseInt(br.readLine());
            int n = Integer.parseInt(br.readLine());

            int [][] people = new int[k+1][n];

            for (int j = 0; j <= k; j++) {
                people[j][0]=1;
            }

            for (int j = 0; j < n; j++) {
                people[0][j]=j+1;
            }

            for (int j = 1; j <= k; j++) {
                for (int l = 1; l < n; l++) {
                    people[j][l]=people[j-1][l]+people[j][l-1];
                }
            }
            System.out.println(people[k][n-1]);
        }
    }
}
