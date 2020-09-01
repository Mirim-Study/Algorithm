class Suhyeon {
    public double Suhyeon(int[] arr) {
        double answer = 0;
        int count = 0;
        
        for(int i = 0; i < arr.length; i++){
            answer += arr[i];
            count++;
        } 
            
        return (answer/count);
    }
}
