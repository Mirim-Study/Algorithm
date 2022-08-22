function solution(idList, report, MAX_REPORT_COUNT) {
    const answer = [];
    const stop = [];
    
    const reportedList = {};
    const stoppedList = {};
    const distinctReportList = new Set(report);
    
    for(const distinctReport of distinctReportList) {
        const [userID, reportID] = distinctReport.split(' ');
        const beforeReport = reportedList[userID];
        if(beforeReport !== undefined)
            reportedList[userID] = [reportID, ...beforeReport];
        else
            reportedList[userID] = [reportID];
            
        if(stoppedList[reportID] === undefined)
            stoppedList[reportID] = 1;
        else
            stoppedList[reportID]++;
    }
    for (const [key, value] of Object.entries(stoppedList)) {
      if(value >= MAX_REPORT_COUNT) stop.push(key);
    }
    
    for(const user of idList){
        let count = 0;
        for(const id of stop){
            if(JSON.stringify(reportedList[user] || '').includes(id)){
                count++;
            }
        }
        answer.push(count);
    }
    
    return answer;
}
