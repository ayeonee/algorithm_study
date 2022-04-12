import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

class Test{
    public long sum(int[] a){
        long result = 0;
        for(int i=0; i<a.length; i++){
            result+=a[i];
        }
        return result;
    }
}
public class num_1 {
    public static void main(String[] args) throws IOException {
        BufferedReader bw=new BufferedReader(new InputStreamReader(System.in));
        int n=Integer.parseInt(bw.readLine());
        String s = bw.readLine();
        StringTokenizer st = new StringTokenizer(s);
        int []a = new int[n];

        for (int i = 0; i < n; i++) {
            a[i]=Integer.parseInt(st.nextToken());
        }

        Test t = new Test();
        System.out.print(t.sum(a));
    }
}
