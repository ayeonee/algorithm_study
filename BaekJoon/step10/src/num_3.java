//2447 별 찍기 - 10

import java.io.*;

public class num_3 {
    public static void printStar(char [][] arr, int N, int x, int y){
        if(N==1) {
            arr[x][y]='*';
            return;
        }
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if(i!=1 || j!=1) printStar(arr, N/3, x+i*(N/3), y+j*(N/3));
            }
        }
    }
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        char [][] array = new char[N][N];
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                array[i][j]=' ';
            }

        }

        printStar(array, N, 0,0);

        for (char[] c:array) {
            for (char cc: c) {
                bw.write(cc);
            }
            bw.write("\n");
        }

        bw.flush();
        bw.close();
        br.close();
    }
}
