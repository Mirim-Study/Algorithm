import java.util.*;
class Solution {
   public static String solution(String[] participant, String[] completion) {
		//HashMap<Integer,String> hashMap = new HashMap<Integer,String>();//HashMap持失
		HashMap<String,Integer> hashMap = new HashMap<String,Integer>();//HashMap持失
		String answer="";
		for(String name:participant) {
			hashMap.put(name, hashMap.getOrDefault(name, 0)+1);
		}
		for(String name:completion) {
			hashMap.put(name, hashMap.get(name)-1);
			
		}
		for(String name:participant) {
			System.out.println(hashMap.get(name));
			if(hashMap.get(name)!=0) {
				answer=name;
				break;
			}
		}
        return answer;
    }
}