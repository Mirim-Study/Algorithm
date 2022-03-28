class Solution {
    public int solution(String skill, String[] skill_trees) {
        int answer = 0;
        String[] skillArr = skill.split("");
        
        for(String skillTree : skill_trees) {
            int skillArrIdx = 0;
            boolean flag = true;
            
            for(String skillCh : skillTree.split("")) {
                if(skillArr.length <= skillArrIdx) break;
                if(skill.contains(skillCh) && !(skillArr[skillArrIdx].equals(skillCh))) { 
                    flag = false;
                    break;
                }
                else if(skillArr[skillArrIdx].equals(skillCh)) skillArrIdx++;
            }
            
            if(flag) answer++;
        }
        
        return answer;
    }
}
