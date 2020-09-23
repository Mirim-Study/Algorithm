class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[arr1.length];
        
        for(int i = 0; i < arr1.length; i++) {
            String result = "";
            String binary1 = Integer.toBinaryString(arr1[i]);
            String binary2 = Integer.toBinaryString(arr2[i]);
            
            binary1 = binary(binary1, arr1.length);
            binary2 = binary(binary2, arr1.length);
            
            int len = binary1.length();
            for(int j = 0; j < len; j++) {
                char b1 = binary1.charAt(j);
                char b2 = binary2.charAt(j);
                result += b1 == '1' || b2 == '1'? "#" : " "; 
            } 
            answer[i] = result;
        }
        
        return answer;
    }
    //이진수를 n자리로 맞춰주는 함수
    public String binary(String b, int length) {
        int len = b.length();
        String result = "";
        
        if(len == length)
            return b;
        
        for(int i = 0; i < length - len; i++) 
            result += "0";
        result += b;
        
        return result;
    }
}
