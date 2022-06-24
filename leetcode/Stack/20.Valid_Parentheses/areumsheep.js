/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    
    for(let bracket of s) {
        if(map.has(bracket)) {
            if(map.get(bracket) !== stack.pop()) {
                return false;
            }
        } else {
            stack.push(bracket);
        }
    }
    
    
    return stack.length === 0;
};
