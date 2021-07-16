function solution(s) {
    var numbers = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    var n = -1;
    
    for (var i = 0; i < numbers.length;) {
        n = s.indexOf(numbers[i]);
      
        if (n != -1) {
            s = s.substr(0, n) + i + s.substr(n + numbers[i].length);
            i--;
        } else i++;
    }
    
    return parseInt(s);
}
