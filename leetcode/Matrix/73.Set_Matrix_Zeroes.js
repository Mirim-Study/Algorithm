/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowNum = new Set(); //가로
    let columnNum = new Set(); //세로
    
    for(let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        
        for(let j = 0; j < row.length; j++){
            const column = row[j];
            
            if(column === 0) {
                rowNum.add(i);
                columnNum.add(j);
            }
        }
    }
    
    for(let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        
        for(let j = 0; j < row.length; j++){
            if(rowNum.has(i) || columnNum.has(j)) {
                row[j] = 0;
            }
        }
    }
};
