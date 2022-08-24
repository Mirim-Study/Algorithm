import java.util.Map;
import java.util.HashMap;
import java.util.Arrays;

class Solution {
    public int[] solution(String[] id_list, String[] report, int MAX_REPORT_COUNT) {
        int[] answer =  new int[id_list.length];
        Map<String, Integer> reportedUsers = new HashMap<>();
        Map<String,StringBuilder> reportUsers = new HashMap<>();
        
        report = Arrays.stream(report).distinct().toArray(String[]::new);
        for(String id : id_list) {
            reportedUsers.put(id, 0);
            reportUsers.put(id, new StringBuilder());
        }
        
        for(int i = 0; i < report.length; i++) {
            String[] userId = report[i].split(" ");
            reportedUsers.merge(userId[1], 1, Integer::sum);
            reportUsers.merge(userId[0], new StringBuilder(getUserIdWithSeparator(userId[1])), StringBuilder::append);
        }
        
        
        for(int i = 0; i < id_list.length; i++) {
            for(String reportedUser : reportedUsers.keySet()) {
                if(reportedUsers.get(reportedUser) >= MAX_REPORT_COUNT 
                   && reportUsers.get(id_list[i]).indexOf(getUserIdWithSeparator(reportedUser)) > -1) {
                    answer[i]++;
                }
            }
        }
        
        return answer;
    }
    
    private String getUserIdWithSeparator(String userId) {
        return "*" + userId + "*";
    } 
}
