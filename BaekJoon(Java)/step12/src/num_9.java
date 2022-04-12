//10814 나이순 정렬

import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

class Member implements Comparable<Member>{
    int age;
    String name;
    Member(int age, String name){
        this.age = age;
        this.name = name;
    }
    @Override
    public int compareTo(Member o) {
        return Integer.compare(this.age, o.age);
    }
}

public class num_9 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N=Integer.parseInt(br.readLine());
        Member [] members = new Member[N];
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            members[i]=new Member(Integer.parseInt(st.nextToken()), st.nextToken());
        }
        Arrays.sort(members);
        for(Member m : members){
            bw.write(m.age+" "+m.name+"\n");
        }
        bw.flush();
        bw.close();
        br.close();
    }
}
