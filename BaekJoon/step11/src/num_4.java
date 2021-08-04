//1018 체스판 다시 칠하기

import java.io.*;
import java.util.StringTokenizer;

public class num_4 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        char [][] chessboard = new char[N][M];
        char [][] answerChess = {{'B','W','B','W','B','W','B','W'}, {'W','B','W','B','W','B','W','B'},
                        {'B','W','B','W','B','W','B','W'}, {'W','B','W','B','W','B','W','B'},
                        {'B','W','B','W','B','W','B','W'}, {'W','B','W','B','W','B','W','B'},
                        {'B','W','B','W','B','W','B','W'}, {'W','B','W','B','W','B','W','B'}};
        char[][] answerChess2={{'W','B','W','B','W','B','W','B'},{'B','W','B','W','B','W','B','W'},
                {'W','B','W','B','W','B','W','B'},{'B','W','B','W','B','W','B','W'},
                {'W','B','W','B','W','B','W','B'},{'B','W','B','W','B','W','B','W'},
                {'W','B','W','B','W','B','W','B'},{'B','W','B','W','B','W','B','W'}};
        for (int i = 0; i < N; i++) {
            String s1=br.readLine();
            for (int j = 0; j < M; j++) chessboard[i][j]=s1.charAt(j);
        }

        int ans=9999;
        for (int i = 0; i <= N-8; i++) {
            for (int j = 0; j <= M-8; j++) {
                int count1=0;
                int count2=0;
                for (int k = 0; k < 8; k++) {
                    for (int l = 0; l < 8; l++) {
                        if(chessboard[i+k][j+l]!=answerChess[k][l]) count1++;
                        if(chessboard[i+k][j+l]!=answerChess2[k][l]) count2++;
                    }
                }
                if(Math.min(count1, count2)<=ans) ans=Math.min(count1, count2);
            }
        }
        bw.write(String.valueOf(ans));
        bw.flush();
        br.close();
        bw.close();
    }
}
