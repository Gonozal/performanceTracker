const staticData = {
  startSr: 1350,
  mapTypes:["Assault", "Escort", "Hybrid", "Control"],
  maps: [
    { name: "Overall", shortName: "Overall", type: "Aggregate"},
    { name: "Assault", shortName: "Assault", type: "Aggregate"},
    { name: "Escort", shortName: "Escort", type: "Aggregate"},
    { name: "Hybrid", shortName: "Hybrid", type: "Aggregate"},
    { name: "Control", shortName: "Control", type: "Aggregate"},
    { name: "Hanamura", shortName: "Hanamura", type: "Assault"},
    { name: "Horizon Lunar Colony", shortName: "Horizon", type: "Assault"},
    { name: "Temple of Anubis", shortName: "Anubis", type: "Assault" },
    { name: "Volskaya Industries", shortName: "Volskaya", type: "Assault" },
    { name: "Dorado", shortName: "Dorado", type: "Escort" },
    { name: "Junkertown", shortName: "Junkertown", type: "Escort" },
    { name: "Rialto", shortName: "Rialto", type: "Escort" },
    { name: "Watchpoint: Gibraltar", shortName: "Gibraltar", type: "Hybrid" },
    { name: "Blizzard World", shortName: "Blizz World", type: "Hybrid" },
    { name: "Eichenwalde", shortName: "Eichenwalde", type: "Hybrid" },
    { name: "Hollywood", shortName: "Hollywood", type: "Hybrid" },
    { name: "King's Row", shortName: "King's Row", type: "Hybrid" },
    { name: "Numbani", shortName: "Numbani", type: "Hybrid" },
    { name: "Ilios", shortName: "Ilios", type: "Control" },
    { name: "Lijang Tower", shortName: "Lijang", type: "Control" },
    { name: "Nepal", shortName: "Nepal", type: "Control" },
    { name: "Oasis", shortName: "Oasis", type: "Control" },
  ],
  heroRoles: ["Offense", "Defense", "Tank", "Support"],
  heroes: [
    { name: "Overall",     type: "Aggregate"},
    { name: "Offense",     type: "Aggregate"},
    { name: "Defense",     type: "Aggregate"},
    { name: "Tank",        type: "Aggregate"},
    { name: "Support",     type: "Aggregate"},
    { name: "Doomfist",    type: "Offense"},
    { name: "Genji",       type: "Offense"},
    { name: "McCree",      type: "Offense"},
    { name: "Pharah",      type: "Offense"},
    { name: "Reaper",      type: "Offense"},
    { name: "Soldier: 76", type: "Offense"},
    { name: "Sombra",      type: "Offense"},
    { name: "Tracer",      type: "Offense"},
    { name: "Bastion",     type: "Defense"},
    { name: "Hanzo",       type: "Defense"},
    { name: "Junkrat",     type: "Defense"},
    { name: "Mei",         type: "Defense"},
    { name: "Torbjörn",    type: "Defense"},
    { name: "Widowmaker",  type: "Defense"},
    { name: "D.Va",        type: "Tank"},
    { name: "Orisa",       type: "Tank"},
    { name: "Reinhardt",   type: "Tank"},
    { name: "Roadhog",     type: "Tank"},
    { name: "Winston",     type: "Tank"},
    { name: "Zarya",       type: "Tank"},
    { name: "Ana",         type: "Support"},
    { name: "Brigitte",    type: "Support"},
    { name: "Lúcio",       type: "Support"},
    { name: "Mercy",       type: "Support"},
    { name: "Moira",       type: "Support"},
    { name: "Symmetra",    type: "Support"},
    { name: "Zenyatta",    type: "Support"}

  ]
};

// const generateMatchHistory = () => {
//   const randomElement = (array) => array[Math.floor(Math.random()*array.length)];
//
//   const heroPicks = [...Array(5).keys()].map(() => {
//     return randomElement(staticData.heroes);
//   }).reduce((heroes, hero, i) => {
//     return heroes.concat([...Array(i+1).keys()].map(() => hero))
//   }, []);
//
//   let tempSr = staticData.startSr;
//   let matchHistory = [];
//
//   while(tempSr < 4100){
//     let srChange;
//     if(Math.random() < 0.32){
//       srChange = - Math.floor(40 + Math.random() * 5);
//     } else if(Math.random() < 0.35){
//       srChange = 0;
//     } else {
//       srChange = Math.floor(40 + Math.random() * 5);
//     }
//     tempSr += srChange;
//     const heroCount = Math.floor(Math.sqrt(1+ Math.random() * 9));
//     const heroes = [...Array(heroCount).keys()].map(() => randomElement(heroPicks));
//
//     matchHistory = matchHistory.concat([{srChange: srChange, newSr: tempSr, heroes: heroes, map: randomElement(staticData.maps)}]);
//     console.log(tempSr);
//   }
//   return matchHistory;
// };

module.exports = staticData;
