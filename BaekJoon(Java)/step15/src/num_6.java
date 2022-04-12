//1932 정수 삼각형 - trying

import java.io.*;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class num_6 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int n = Integer.parseInt(br.readLine());
        ArrayList<int []> triangle = new ArrayList<>(n);
        for (int i = 0; i < n; i++) {
            StringTokenizer st =new StringTokenizer(br.readLine());
            int [] arr = new int[st.countTokens()];
            for (int j = 0; j < st.countTokens(); j++) {
                arr[j]=Integer.parseInt(st.nextToken());
            }
            triangle.add(arr);
        }
        int [] first = triangle.get(0);
        long [] ans = new long [n];
        for (int i = 0; i < n; i++) {
            ans[i]=first[i];
            for (int j = n-2; j >=0 ; j++) {
                int [] preLine =triangle.get(j);
                int idx=i;
                if(idx==0){
                    ans[i]+=preLine[0];
                }
                else{
                    ans[i]+=Math.max(preLine[idx-1], preLine[idx]);
                }
            }
        }
    }
}
