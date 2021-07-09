class Solution {
    fun solution(lottos: IntArray, win_nums: IntArray): IntArray {
        var success = 0
        var zero = lottos.count { it === 0 }
        win_nums.forEach { it -> if (lottos.indexOf(it) != -1) success++ }
        
        var best = success + zero
        var worst = success
        
        fun rank(n: Int) : Int = if (n < 2) 6 else 7 - n
        
        return intArrayOf(rank(best), rank(worst))
    }
}
