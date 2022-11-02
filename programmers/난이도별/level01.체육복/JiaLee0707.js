function solution(n, lost, reserve) {
    const lost_filter = lost.sort((a, b) => a - b).filter((value) => !reserve.includes(value));
    const reserve_filter = reserve.sort((a, b) => a - b).filter((value) => !lost.includes(value));

    for(const reservePerson of reserve_filter) {
        for(const lostPerson of lost_filter) {
            if(Math.abs(reservePerson - lostPerson) === 1) {
                lost_filter.shift();
                break;
            }
        }
    }

    return n - lost_filter.length;
}
