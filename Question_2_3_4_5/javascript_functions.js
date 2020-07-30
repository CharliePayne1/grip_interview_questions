const sanitizeInput = (string) => {
    string = string.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    return string.trim();
}

// select the records which match the action you are looking for
// filter the results to records whose date_actioned lies between the start_time and end_time
// return the user's id of each of these results 

letgetUsers = (records, playbackAction, start_time, end_time) => {
    const matchingActionRecords = records.filter(r => r.action === playbackAction)
    const recordsActionedWithinTimeframe = matchingActionRecords.filter(r => r.date_actioned >= start_time && r.date_actioned <= end_time)
    return recordsActionedWithinTimeframe.map(r => r.user_id)
};

// select the records associated with the user you are looking for 
// find the first time the user starts playing 
// find the last time they stopped playing
// return the difference between the end time and start time

let getPlaybackTime = (id, records) => {
    const userRecords = records.filter(r => r.user_id === id)
    const startTime = userRecords[0]
    const endTime = userRecords.reverse().find(r => r.action === "stop")
    return endTime.date_actioned - startTime.date_actioned
};