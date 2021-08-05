//2108 통계학

import java.io.*;
import java.util.Arrays;

public class num_4 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N=Integer.parseInt(br.readLine());
        int []num=new int[N];
        int []forCount=new int[8001];
        int max = 0;
        double sum=0;
        for (int i = 0; i < N; i++) {
            num[i] = Integer.parseInt(br.readLine());
            sum+=num[i];
            forCount[num[i]+4000]++;
        }
        Arrays.sort(num);
        bw.write(Math.round(sum/N)+"\n");   //산술평균
        bw.write(num[N/2]+"\n");            //중앙값

        //최빈값
        for (int i = 0; i < 8001; i++) {
            if(max<forCount[i]) max = forCount[i];
        }
        int count=0;
        int result=0;
        for (int i = 0; i < 8001; i++) {
            if(forCount[i]==max) {
                count++;
                result = i;
            }
            if(count==2) {
                bw.write(i-4000+"\n");
                break;
            }
            else if(count==1 && i==8000) bw.write(result-4000+"\n");
        }
        bw.write(num[N-1]-num[0]+"");       //범위
        bw.flush();
        bw.close();
        br.close();
    }
}
