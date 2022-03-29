function solution(phone_number) {
    const phone_num_sub = phone_number.length - 4;

    // 현재 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다.
    // *을 받은 phone_number의 length보다 -4 만큼의 길이까지 *로 반복해 반환한다.
    return '*'.repeat(phone_num_sub) + phone_number.substring(phone_num_sub)
}
