import java.util.*;
import java.util.Map.Entry;

class Solution {
    public String[] solution(String[] strings, int n) {
        String[] answer = new String[strings.length];
        Map<Integer, Character> map = new HashMap<>();
        for(int i = 0; i < strings.length; i++)
            map.put(i, strings[i].charAt(n));
        
        List<Entry<Integer, Character>> ch = new ArrayList<Entry<Integer, Character>>(map.entrySet());

		// 비교함수 Comparator를 사용하여 오름차순으로 정렬
		Collections.sort(ch, new Comparator<Entry<Integer, Character>>() {
			public int compare(Entry<Integer, Character> obj1, Entry<Integer, Character> obj2) {
				return obj1.getValue().compareTo(obj2.getValue());
			}
		});
        
        int index = 0;
        
        for(int i = 0; i < strings.length; i++) {
            List<Integer> list = new ArrayList();
            char c = ch.get(i).getValue();
            list.add(ch.get(i).getKey());
            for(int j = i + 1; j < strings.length; j++) {
                if(c == ch.get(j).getValue()) {
                    i++;
                    list.add(ch.get(j).getKey());
                }
                else
                    break;
            }
            List<String> str = new ArrayList();
            for(int idx : list) 
                str.add(strings[idx]);
            Collections.sort(str);
            
            for(String s : str) 
                answer[index++] = s;
        }
        
        return answer;
    }
}
