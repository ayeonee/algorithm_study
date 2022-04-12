import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class num_5 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n= Integer.parseInt(br.readLine());
        String s=br.readLine();
        StringTokenizer st = new StringTokenizer(s);

        double []score=new double[n];

        for(int i=0; i<n; i++){
            score[i]=Double.parseDouble(st.nextToken());
        }

        double max=Arrays.stream(score).max().getAsDouble();
        double sum=0;

        for(int i=0; i<n; i++){
            score[i] = score[i]/max*100;
            sum+=score[i];
        }
        System.out.println(sum/n);
    }
}
