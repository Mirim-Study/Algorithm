class Solution {
    public int solution(int[] a, int[] b) {
        int answer = innerProduct(a, b, a.length - 1);
        return answer;
    }
    public int innerProduct(int[] a, int b[], int n) {
        if(n == 0) 
            return a[n] * b[n];
        return a[n] * b[n] + innerProduct(a, b, n - 1);
    }
}
