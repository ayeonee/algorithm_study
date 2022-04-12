import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;

public class num_4 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        HashSet<Integer> set=new HashSet<>();
        int n=0;

        for(int i=0; i<10; i++){
            n=Integer.parseInt(br.readLine());
            set.add(n%42);
        }
        System.out.println(set.size());
    }
}
