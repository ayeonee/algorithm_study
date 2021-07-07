import java.io.*;
import java.util.StringTokenizer;

public class num_4 {
    public static void main(String[] args) {
        try{
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

            int n=Integer.parseInt(br.readLine());

            for(int i=0; i<n; i++){
                String s = br.readLine();
                StringTokenizer st = new StringTokenizer(s);
                int a = Integer.parseInt(st.nextToken());
                int b = Integer.parseInt(st.nextToken());
                bw.write((a+b) +"\n");
            }
            bw.flush();
        }
        catch (IOException e){
            e.getMessage();
        }
    }
}
