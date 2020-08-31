function suhyeon(s){   
    var pExp = /p/gi;
    var yExp = /y/gi;
    
    var pResult = s.match(pExp);
    var yResult = s.match(yExp);
    
    if(pResult.length == yResult.length){
        return true;
    }
    return false;
}
