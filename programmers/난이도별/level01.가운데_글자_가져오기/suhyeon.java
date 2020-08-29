class suhyeon {
    public String suhyeon(String s) {
        String answer = "";
        int size=s.length();
        
        if(size%2==0){
            size=size/2;
            answer=s.substring(size-1, size+1); 
        }
        else{
            size=size/2;
            answer=s.substring(size, size+1); 
        }
        
        return answer;
    }
}
