function matchesPerYears(matches){
    const result = {};
    for(let match of matches){
        const a =match.winner;
        if(result[a]){
            result[a] +=1;
        }
        else{
            result[a] =1;
        }
    }
    return result;
}

module.exports = matchesPerYears;
