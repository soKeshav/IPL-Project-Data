
 function topEconomicalBowler(deliveries,matches2015){
    let matchesId = matches2015.map(match => match.Id);
    let Obj = {};
    for(let delivery of deliveries){
     if(matchesId.includes(delivery.match_Id)){
       const totalRuns = delivery.total_runs;
       const bowler = delivery.bowler;
       let balls=1;
       if(Obj[bowler]){
         let rest=parseInt(delivery.ball) <= 6 ? 1:0
         Obj[bowler][0]+=parseInt(totalRuns);
         Obj[bowler][1]+=rest;
       }
       else{
         Obj[bowler]=[parseInt(totalRuns),balls];
       }
     }
    }
    function topfindEconomy(bowlerstats,bowlerNames){
     const tem = {};
     for(let i=0;i<bowlerstats.length;i++){
       const bowlerName = bowlerNames[i];
       const overs = bowlerstats[i][1]/6;
       const economy =(bowlerstats[i][0]/overs);
       tem[bowlerName] = economy;
     }
     return tem;
    }
    const bowlerstats =Object.values(Obj);
    const bowlerName = Object.keys(Obj);
    const economyOfBowlers = topfindEconomy(bowlerstats,bowlerName);
      
      function ResultData(economyOfBowlers){
       let arrayBowlersEconomy=[]
       for(let bowler in economyOfBowlers){
         arrayBowlersEconomy.push([bowler,economyOfBowlers[bowler]])
       }
       arrayBowlersEconomy.sort((a,b)=>a[1]-b[1]);
       let final = {}
       arrayBowlersEconomy.slice(0,10).forEach(item => {final[item[0]]=item[1]})
       return final
      }
      const final = ResultData(economyOfBowlers)
      return final
  }
  module.exports =topEconomicalBowler