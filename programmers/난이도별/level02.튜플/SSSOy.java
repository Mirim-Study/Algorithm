import java.util.*;

class Solution {
    public int[] solution(String s) {
        // 중괄호 제거 후 튜플 요소 배열로 변환
        String[] tuples = s.replace("{", "").replace("}", "").split(",");
        Map<String, Integer> cntTuples = new HashMap<>();
        
        // 각 요소의 개수 count
        for(String num : tuples) 
            cntTuples.merge(num, 1, Integer::sum);
        
        // count한 개수 기준으로 Map reverse sort
        List<Map.Entry<String, Integer>> answerList = new LinkedList<>(cntTuples.entrySet());
        Collections.sort(answerList, (o1, o2) -> o2.getValue().compareTo(o1.getValue()));
        
        int[] answer = new int[answerList.size()];
        for(int i = 0; i < answer.length; i++) 
            answer[i] = Integer.parseInt(answerList.get(i).getKey());
        
        return answer;
    }
}
