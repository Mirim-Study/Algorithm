class Solution {
    public int solution(int[][] sizes) {
        int width = 0;
        int height = 0;
        
        for(int i = 0; i < sizes.length; i++) {
            int max = sizes[i][0] > sizes[i][1]? sizes[i][0] : sizes[i][1];
            int min = sizes[i][0] < sizes[i][1]? sizes[i][0] : sizes[i][1];
            
            width = width < max ? max : width;
            height = height < min ? min : height;
        }
        
        return width * height;
    }
}
