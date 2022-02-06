function solution(array, commands) {
    return commands.map(command =>  array.slice(command[0]-1,command[1]).sort((a,b) => a-b)[command[2]-1]);
}
