function solution(participant, completion) {
    var mapParticipant = new Map();
    participant.forEach(function(i, ind){
        if(mapParticipant.has(i)){
            mapParticipant.set(i, mapParticipant.get(i)+1);
        }else{
            mapParticipant.set(i,1);
        }
    });

    for(var i = 0; i < completion.length ; i++){
        mapParticipant.set(completion[i], mapParticipant.get(completion[i])-1);
    }
    
    var ans;
    mapParticipant.forEach(function(i,ind){
       if(i >= 1){
           ans = ind;
       } 
    });
    
    
    return ans;
    
}
