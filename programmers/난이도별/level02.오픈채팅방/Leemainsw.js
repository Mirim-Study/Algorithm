function solution(record) {
    let nickNames = [];
    let printUsers = [];
    
    const Enter = '님이 들어왔습니다.';
    const Leave = '님이 나갔습니다.';
    
    const printString = {Leave, Enter};
    
    record.forEach((data)=> {
        // 띄어쓰기를 기준으로 나눈 데이터들을 각각 state, uid, nickName 변수로 저장한다.
        const [state, uid, nickName] = data.split(" ");
      
        // 닉네임이 있다면 nickNames에 uid를 키값으로 nickName 저장한다.
        // state와 상관 없이 저장하기 때문에 마지막으로 저장된 데이터가 user의 닉네임이 된다.
        if(nickName) nickNames[uid] = nickName;
      
        // Change가 아닐 경우 데이터를 출력해야하기 떄문에 
       // printUser에 push한다.
        if(state !== 'Change') printUsers.push([state, uid])
    });
    
    return printUsers.map(([state, uid]) => {
      // uid를 키값으로 저장한 유저의 닉네임을 가져온다.
      const nickName = nickNames[uid];
      // 뒤에 붙을 문장을 state를 사용해 가져온다.
      const comment = printString[state];
      
      return `${nickName}${comment}`
    });
    
}
