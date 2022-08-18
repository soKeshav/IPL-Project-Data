const csv = require("csvtojson");
const matchesPerYears=require("./ipl/matchesPerYears");
const matchesWonTeams=require("./ipl/matchesWonTeams");
const extraRunConceded = require("./ipl/extraRunConceded");
const topEconomicalBowler=require("./ipl/topEconomicalBowler")
const matchesWonByCSK=require("./ipl/matchesWonByCSK")
const MATCHES_FILE_PATH="./csv_data/matches.csv";
const DELIVERIES_FILE_PATH="./csv_data/deliveries.csv";
function main(){
csv()
     .fromFile(MATCHES_FILE_PATH)
     .then(matches =>{
        csv()
        .fromFile(DELIVERIES_FILE_PATH)
     .then(deliveries =>{
       console.log(matchesPerYears(matches));
       console.log(matchesWonTeams(matches));
       const matchD2016 =matches.filter((eachMatch) => eachMatch.season === '2016');
       console.log(extraRunConceded(matchD2016,deliveries));
       const matches2015 =matches.filter((eachMatch) => eachMatch.season === '2015');
       console.log(topEconomicalBowler(deliveries,matches2015));
       console.log(matchesWonByCSK(matches));
     })
    })
    }
main()