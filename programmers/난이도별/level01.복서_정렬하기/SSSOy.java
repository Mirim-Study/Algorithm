import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Solution {
    public int[] solution(int[] weights, String[] head2head) {
        final int[] answer = new int[weights.length];
        final List<Player> playerList = new ArrayList<Player>();
        
        for(int i = 0; i < weights.length; i++) {
            int weight = weights[i];
            String playResults = head2head[i];
            double winningRate = 0.0;
            int heavyPlayerWinNumber = 0;
            int playCnt = 0;
            
            for(int j = 0; j < weights.length; j++) {
                char playResult = playResults.charAt(j);
                if(playResult == 'W') {
                    playCnt++;
                    winningRate += 100;
                    if(weights[j] > weight) {
                        heavyPlayerWinNumber++;
                    }
                }
                else if(playResult == 'L') {
                    playCnt++;
                }
             }
            
            winningRate = playCnt != 0 && winningRate != 0? winningRate / playCnt : 0;
            playerList.add(new Player(i + 1, weight, winningRate, heavyPlayerWinNumber));
        }
        
        Collections.sort(playerList, new PlayerComparator());
        
        for(int i = 0; i < answer.length; i++) {
            Player player = playerList.get(i);
            answer[i] = player.getNum();
        }
        
        return answer;
    }
}

class Player {
    private int num;
    private int weight;
    private double winningRate;
    private int heavyPlayerWinNumber;
    
    public Player() {}
    public Player(int num, int weight, double winningRate, int heavyPlayerWinNumber) {
        this.num = num;
        this.weight = weight;
        this.winningRate = winningRate;
        this.heavyPlayerWinNumber = heavyPlayerWinNumber;
    }
    
    public int getNum() {
        return this.num;
    }
    public int getWeight() {
        return this.weight;
    }
    public double getWinningRate() {
        return this.winningRate;
    }
    public int getHeavyPlayerWinNumber() {
        return this.heavyPlayerWinNumber;
    }
}

class PlayerComparator implements Comparator<Player> {
	@Override
    public int compare(Player first, Player second) {
        if (first.getWinningRate() > second.getWinningRate()) {
            return -1;
        }
        else if (first.getWinningRate() < second.getWinningRate()) {
            return 1;
        }
        else {
            if (first.getHeavyPlayerWinNumber() > second.getHeavyPlayerWinNumber()) {
                return -1;
            }
            else if (first.getHeavyPlayerWinNumber() < second.getHeavyPlayerWinNumber()) {
                return 1;
            }
            else {
                if (first.getWeight() > second.getWeight()) {
                    return -1;
                }
                else if (first.getWeight() < second.getWeight()) {
                    return 1;
                }
                else {
                    if (first.getNum() > second.getNum()) {
                        return 1;
                    }
                    else if (first.getNum() < second.getNum()) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            }
        }
    }
}
