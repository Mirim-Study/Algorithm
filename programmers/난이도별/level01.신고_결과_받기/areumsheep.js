function solution(id_list, report, k) {
    
    // -- 변수 및 상수 선언
    const MAX_REPORT_COUNT = k;
    const reportSet = new Set(report); //Set을 통해 중복된 신고는 단일 신고로 변경
    
    //각 id 당 신고당한 횟수: reportedCount / 각 id 당 신고한 사람: reportedBy
    const mailCount = {};     // {"id": Number(count)}
    const reportedCount = {}; // {"id": Number(count)}
    const reportedBy = {};    // {"id": []}
    
    // -- 객체 초기화
    id_list.forEach((id) => {
        mailCount[id] = 0;
        reportedCount[id] = 0;
        reportedBy[id] = [];
    });
    
    // -- 신고당한 횟수, 신고한 아이디 분리
    reportSet.forEach((report) => {
        const [userID, reportedID] = report.split(' ');
        reportedCount[reportedID] += 1;
        reportedBy[reportedID].push(userID);
    });
    
    // -- 정지된 계정을 찾고 정지된 계정을 신고한 사용자의 mailCount 값 증가
    for(const user of id_list){
        if(reportedCount[user] >= MAX_REPORT_COUNT){
            reportedBy[user].forEach((reporter) => {
                mailCount[reporter] += 1;
            })
        }
    }
    
    // -- 객체의 값만 뽑아서 리턴
    return Object.values(mailCount);
}
