import java.util.*;

class Solution {
    public int solution(String str1, String str2) {
        int answer = 0;
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        int str1_len = str1.length();
        int str2_len = str2.length();
        
        List<String> s1 = new ArrayList();
        List<String> s2 = new ArrayList();
        
        for(int i = 0; i < str1_len - 1; i++) {
            if(str1.charAt(i) >= 'a' && str1.charAt(i) <= 'z' && str1.charAt(i + 1) >= 'a' && str1.charAt(i + 1) <= 'z') {
                s1.add(str1.substring(i, i + 2));
            }
        }
        for(int i = 0; i < str2_len - 1; i++) {
            if(str2.charAt(i) >= 'a' && str2.charAt(i) <= 'z'&& str2.charAt(i + 1) >= 'a' && str2.charAt(i + 1) <= 'z')
                s2.add(str2.substring(i, i + 2));
        }
        
        Collections.sort(s1);
        Collections.sort(s2);
        
        int intersect = 0;
        int union = 0;
        
        Iterator<String> iter1 = s1.iterator();
        while(iter1.hasNext()) {
            String s = iter1.next();
            boolean flag = false;
            
            Iterator<String> iter2 = s2.iterator();
            while(iter2.hasNext()) {
                if(s.equals(iter2.next())) {
                    intersect ++;
                    iter2.remove();
                    flag = true;
                    break;
                }
            }
            if(flag)
                iter1.remove();
        }
        
        union = intersect + s1.size() + s2.size();
        
        //intersect_set.retainAll(s2);
        //s1.addAll(s2);
        
        //int intersect = intersect_set.size();
        //int union = s1.size();
        
        double an = union == 0? 1 : (double)intersect / union;
        answer = (int)(an * 65536);
        
        return answer;
    }
}
