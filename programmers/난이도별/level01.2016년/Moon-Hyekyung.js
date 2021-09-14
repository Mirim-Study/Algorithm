function solution(a, b) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const dayIdx = new Date(`2016-${a}-${b}`).getDay()
    
    return days[dayIdx];
}
