//18870 좌표 압축

import java.io.*;
import java.util.*;

public class num_10 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N=Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int []num = new int[N];
        for (int i = 0; i < N; i++) {
            num[i]=Integer.parseInt(st.nextToken());
        }
        int []sorted = num.clone();
        Arrays.sort(sorted);
        HashMap<Integer, Integer> ans = new HashMap<>();
        int count=0;
        for (int i : sorted) {
            if (!ans.containsKey(i)) {
                ans.put(i, count++);
            }
        }
        for (int i = 0; i < N; i++) {
            bw.write(ans.get(num[i])+" ");
        }
        bw.flush();
        bw.close();
        br.close();
    }
}
