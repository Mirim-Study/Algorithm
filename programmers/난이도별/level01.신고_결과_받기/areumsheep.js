function solution(id_list, report, k) {
    // 각 id 당 신고당한 횟수 reportedCount, 각 id 당 신고한 사람 reportedBy
    
    const MAX_REPORT_COUNT = k;
    const reportSet = new Set(report);
    
    const mailCount = {};     // {"id": Number(count)}
    const reportedCount = {}; // {"id": Number(count)}
    const reportedBy = {};    // {"id": []}
    
    id_list.forEach((id) => {
        mailCount[id] = 0;
        reportedCount[id] = 0;
        reportedBy[id] = [];
    });
    
    reportSet.forEach((report) => {
        const [userID, reportedID] = report.split(' ');
        reportedCount[reportedID] += 1;
        reportedBy[reportedID].push(userID);
    });
    
    for(const user of id_list){
        if(reportedCount[user] >= MAX_REPORT_COUNT){
            reportedBy[user].forEach((reporter) => {
                mailCount[reporter] += 1;
            })
        }
    }
    
    return Object.values(mailCount);
}
