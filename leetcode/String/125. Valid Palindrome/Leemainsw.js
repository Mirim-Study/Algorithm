/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 받은 string이 빈문자열이라면 true를 반환
    if(s.length == 0) return true;
    
    // 소문자 변경 + 특수문자 및 공백 제거 
    const regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\ '\"\\(\=]/gi;
    const compareString = s.toLowerCase().replace(regExp, '');
    
    // string을 array로 변경하여 순서를 바꾸고 다시 string으로 변환
    const reverseString = compareString.split("").reverse().join("");
  
    // 두 개가 서로 같은지 비교
    return compareString === reverseString;
};
