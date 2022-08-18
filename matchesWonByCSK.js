function matchesWonByCSK(matches){
    let count =0
    for(let match of matches){
        const team =match.winner
        if(team === 'Chennai Super Kings')
        count++
    }
    return count
}
module.exports =matchesWonByCSK