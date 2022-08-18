function extraRunConceded(matchD2016,deliveries){
    const mid=matchD2016.map(eachmatch => eachmatch.id)
    const result ={}
    for(d of deliveries){
        if(mid.includes(d.match_id)){
            const extRun = d.extra_runs;
            const t=d.bowling_team;
            if(result[t]){
                result[t] += parseInt(extRun);
            }
            else{
                result[t] = parseInt(extRun);
            }
        }
    }
    return result;
}
module.exports = extraRunConceded