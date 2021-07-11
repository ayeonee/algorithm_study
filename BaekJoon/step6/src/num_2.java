public class num_2 {
    public static int calculate (int n){
        int result = n;

        while(n!=0){
            result += n%10;
            n=n/10;
        }

        return result;
    }

    public static void main(String[] args) {
        int []array = new int [10001];
        for(int i=1; i<=10000; i++){
            if(calculate(i)<=10000)
                array[calculate(i)]++;
        }
        for(int i=1; i<=10000; i++) {
            if(array[i]==0)
                System.out.println(i);
        }
    }
}
