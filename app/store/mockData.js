const staticData = {
  startSr: 1350,
  mapTypes:["Assault", "Escort", "Hybrid", "Control"],
  maps: [
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
    { name: "Doomfist", role: "Offense"},
    { name: "Genji", role: "Offense"},
    { name: "McCree", role: "Offense"},
    { name: "Pharah", role: "Offense"},
    { name: "Reaper", role: "Offense"},
    { name: "Soldier: 76", role: "Offense"},
    { name: "Sombra", role: "Offense"},
    { name: "Tracer", role: "Offense"},
    { name: "Bastion", role: "Defense"},
    { name: "Hanzo", role: "Defense"},
    { name: "Junkrat", role: "Defense"},
    { name: "Mei", role: "Defense"},
    { name: "Torbjörn", role: "Defense"},
    { name: "Widowmaker", role: "Defense"},
    { name: "D.Va", role: "Tank"},
    { name: "Orisa", role: "Tank"},
    { name: "Reinhardt", role: "Tank"},
    { name: "Roadhog", role: "Tank"},
    { name: "Winston", role: "Tank"},
    { name: "Zarya", role: "Tank"},
    { name: "Ana", role: "Support"},
    { name: "Brigitte", role: "Support"},
    { name: "Lúcio", role: "Support"},
    { name: "Mercy", role: "Support"},
    { name: "Moira", role: "Support"},
    { name: "Symmetra", role: "Support"},
    { name: "Zenyatta", role: "Support"}

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

staticData.matchHistory = [{
  "srChange": -41,
  "newSr": 1309,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T13:51:39.455Z"
}, {
  "srChange": -41,
  "newSr": 1268,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T13:56:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1268,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T14:01:39.455Z"
}, {
  "srChange": 43,
  "newSr": 1311,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T14:06:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1311,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-16T14:11:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1311,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T14:16:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1311,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-16T14:21:39.455Z"
}, {
  "srChange": -42,
  "newSr": 1269,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-16T14:26:39.455Z"
}, {
  "srChange": -43,
  "newSr": 1226,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T14:31:39.455Z"
}, {
  "srChange": 40,
  "newSr": 1266,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T14:36:39.455Z"
}, {
  "srChange": 40,
  "newSr": 1306,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T14:41:39.455Z"
}, {
  "srChange": 40,
  "newSr": 1346,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-16T14:46:39.455Z"
}, {
  "srChange": -42,
  "newSr": 1304,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T14:51:39.455Z"
}, {
  "srChange": 44,
  "newSr": 1348,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T14:56:39.455Z"
}, {
  "srChange": -41,
  "newSr": 1307,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T15:01:39.455Z"
}, {
  "srChange": -43,
  "newSr": 1264,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T15:06:39.455Z"
}, {
  "srChange": -43,
  "newSr": 1221,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T15:11:39.455Z"
}, {
  "srChange": 44,
  "newSr": 1265,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T15:16:39.455Z"
}, {
  "srChange": -43,
  "newSr": 1222,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-16T15:21:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1222,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T15:26:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1222,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T15:31:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1222,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-16T15:36:39.455Z"
}, {
  "srChange": 43,
  "newSr": 1265,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T15:41:39.455Z"
}, {
  "srChange": -41,
  "newSr": 1224,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T15:46:39.455Z"
}, {
  "srChange": -40,
  "newSr": 1184,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T15:51:39.455Z"
}, {
  "srChange": -40,
  "newSr": 1144,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-16T15:56:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1144,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T16:01:39.455Z"
}, {
  "srChange": 41,
  "newSr": 1185,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T16:06:39.455Z"
}, {
  "srChange": 43,
  "newSr": 1228,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T16:11:39.455Z"
}, {
  "srChange": 42,
  "newSr": 1270,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T16:16:39.455Z"
}, {
  "srChange": 40,
  "newSr": 1310,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-16T16:21:39.455Z"
}, {
  "srChange": -43,
  "newSr": 1267,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-16T16:26:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1267,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-16T16:31:39.455Z"
}, {
  "srChange": -41,
  "newSr": 1226,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T16:36:39.455Z"
}, {
  "srChange": -43,
  "newSr": 1183,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T16:41:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1183,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T16:46:39.455Z"
}, {
  "srChange": 40,
  "newSr": 1223,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-16T16:51:39.455Z"
}, {
  "srChange": 43,
  "newSr": 1266,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T16:56:39.455Z"
}, {
  "srChange": 42,
  "newSr": 1308,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T17:01:39.455Z"
}, {
  "srChange": 41,
  "newSr": 1349,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T17:06:39.455Z"
}, {
  "srChange": 43,
  "newSr": 1392,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T17:11:39.455Z"
}, {
  "srChange": -40,
  "newSr": 1352,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T17:16:39.455Z"
}, {
  "srChange": -43,
  "newSr": 1309,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-16T17:21:39.455Z"
}, {
  "srChange": -40,
  "newSr": 1269,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T17:26:39.455Z"
}, {
  "srChange": -43,
  "newSr": 1226,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T17:31:39.455Z"
}, {
  "srChange": 44,
  "newSr": 1270,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T17:36:39.455Z"
}, {
  "srChange": 40,
  "newSr": 1310,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T17:41:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1310,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T17:46:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1310,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T17:51:39.455Z"
}, {
  "srChange": 42,
  "newSr": 1352,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-16T17:56:39.455Z"
}, {
  "srChange": 42,
  "newSr": 1394,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T18:01:39.455Z"
}, {
  "srChange": -44,
  "newSr": 1350,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-16T18:06:39.455Z"
}, {
  "srChange": 40,
  "newSr": 1390,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-16T18:11:39.455Z"
}, {
  "srChange": -44,
  "newSr": 1346,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T18:16:39.455Z"
}, {
  "srChange": -43,
  "newSr": 1303,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-16T18:21:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1303,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T18:26:39.455Z"
}, {
  "srChange": 42,
  "newSr": 1345,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T18:31:39.455Z"
}, {
  "srChange": -41,
  "newSr": 1304,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-16T18:36:39.455Z"
}, {
  "srChange": 40,
  "newSr": 1344,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T18:41:39.455Z"
}, {
  "srChange": 44,
  "newSr": 1388,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T18:46:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1388,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T18:51:39.455Z"
}, {
  "srChange": 41,
  "newSr": 1429,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-16T18:56:39.455Z"
}, {
  "srChange": 40,
  "newSr": 1469,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T19:01:39.455Z"
}, {
  "srChange": -41,
  "newSr": 1428,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T19:06:39.455Z"
}, {
  "srChange": -42,
  "newSr": 1386,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T19:11:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1386,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-16T19:16:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1386,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T19:21:39.455Z"
}, {
  "srChange": 42,
  "newSr": 1428,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-16T19:26:39.455Z"
}, {
  "srChange": -42,
  "newSr": 1386,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T19:31:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1386,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-16T19:36:39.455Z"
}, {
  "srChange": 42,
  "newSr": 1428,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T19:41:39.455Z"
}, {
  "srChange": 42,
  "newSr": 1470,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T19:46:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1470,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-16T19:51:39.455Z"
}, {
  "srChange": -41,
  "newSr": 1429,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T19:56:39.455Z"
}, {
  "srChange": 41,
  "newSr": 1470,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T20:01:39.455Z"
}, {
  "srChange": -42,
  "newSr": 1428,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T20:06:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1428,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T20:11:39.455Z"
}, {
  "srChange": 44,
  "newSr": 1472,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T20:16:39.455Z"
}, {
  "srChange": 0,
  "newSr": 1472,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-16T20:21:39.455Z"
}, {
  "srChange": -43,
  "newSr": 1429,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T20:26:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1429,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T20:31:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1429,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T20:36:39.456Z"
}, {
  "srChange": 44,
  "newSr": 1473,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T20:41:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1473,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T20:46:39.456Z"
}, {
  "srChange": -42,
  "newSr": 1431,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T20:51:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1431,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T20:56:39.456Z"
}, {
  "srChange": -40,
  "newSr": 1391,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T21:01:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1434,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T21:06:39.456Z"
}, {
  "srChange": 40,
  "newSr": 1474,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T21:11:39.456Z"
}, {
  "srChange": 40,
  "newSr": 1514,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T21:16:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1473,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T21:21:39.456Z"
}, {
  "srChange": -44,
  "newSr": 1429,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T21:26:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1388,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T21:31:39.456Z"
}, {
  "srChange": 40,
  "newSr": 1428,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T21:36:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1428,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T21:41:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1471,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-16T21:46:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1514,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T21:51:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1514,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-16T21:56:39.456Z"
}, {
  "srChange": -40,
  "newSr": 1474,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T22:01:39.456Z"
}, {
  "srChange": -44,
  "newSr": 1430,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T22:06:39.456Z"
}, {
  "srChange": 42,
  "newSr": 1472,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T22:11:39.456Z"
}, {
  "srChange": 40,
  "newSr": 1512,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-16T22:16:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1471,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-16T22:21:39.456Z"
}, {
  "srChange": -44,
  "newSr": 1427,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T22:26:39.456Z"
}, {
  "srChange": -43,
  "newSr": 1384,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-16T22:31:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1384,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T22:36:39.456Z"
}, {
  "srChange": 40,
  "newSr": 1424,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-16T22:41:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1424,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T22:46:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1383,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-16T22:51:39.456Z"
}, {
  "srChange": -44,
  "newSr": 1339,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T22:56:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1298,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T23:01:39.456Z"
}, {
  "srChange": 44,
  "newSr": 1342,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T23:06:39.456Z"
}, {
  "srChange": -40,
  "newSr": 1302,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-16T23:11:39.456Z"
}, {
  "srChange": 42,
  "newSr": 1344,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-16T23:16:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1387,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T23:21:39.456Z"
}, {
  "srChange": 41,
  "newSr": 1428,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-16T23:26:39.456Z"
}, {
  "srChange": 44,
  "newSr": 1472,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-16T23:31:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1431,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-16T23:36:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1474,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T23:41:39.456Z"
}, {
  "srChange": 44,
  "newSr": 1518,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T23:46:39.456Z"
}, {
  "srChange": -43,
  "newSr": 1475,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-16T23:51:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1475,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-16T23:56:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1475,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T00:01:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1475,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T00:06:39.456Z"
}, {
  "srChange": 42,
  "newSr": 1517,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T00:11:39.456Z"
}, {
  "srChange": -44,
  "newSr": 1473,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T00:16:39.456Z"
}, {
  "srChange": 41,
  "newSr": 1514,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T00:21:39.456Z"
}, {
  "srChange": 42,
  "newSr": 1556,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T00:26:39.456Z"
}, {
  "srChange": -42,
  "newSr": 1514,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T00:31:39.456Z"
}, {
  "srChange": -44,
  "newSr": 1470,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T00:36:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1470,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T00:41:39.456Z"
}, {
  "srChange": 42,
  "newSr": 1512,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T00:46:39.456Z"
}, {
  "srChange": -40,
  "newSr": 1472,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T00:51:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1472,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T00:56:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1431,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T01:01:39.456Z"
}, {
  "srChange": 41,
  "newSr": 1472,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T01:06:39.456Z"
}, {
  "srChange": 42,
  "newSr": 1514,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T01:11:39.456Z"
}, {
  "srChange": 42,
  "newSr": 1556,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T01:16:39.456Z"
}, {
  "srChange": -43,
  "newSr": 1513,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T01:21:39.456Z"
}, {
  "srChange": -43,
  "newSr": 1470,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T01:26:39.456Z"
}, {
  "srChange": -40,
  "newSr": 1430,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T01:31:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1430,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T01:36:39.456Z"
}, {
  "srChange": -44,
  "newSr": 1386,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T01:41:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1386,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T01:46:39.456Z"
}, {
  "srChange": -40,
  "newSr": 1346,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T01:51:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1346,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T01:56:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1346,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T02:01:39.456Z"
}, {
  "srChange": -42,
  "newSr": 1304,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T02:06:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1304,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T02:11:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1304,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T02:16:39.456Z"
}, {
  "srChange": 41,
  "newSr": 1345,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T02:21:39.456Z"
}, {
  "srChange": 41,
  "newSr": 1386,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T02:26:39.456Z"
}, {
  "srChange": -42,
  "newSr": 1344,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T02:31:39.456Z"
}, {
  "srChange": 41,
  "newSr": 1385,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T02:36:39.456Z"
}, {
  "srChange": -40,
  "newSr": 1345,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T02:41:39.456Z"
}, {
  "srChange": -40,
  "newSr": 1305,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T02:46:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1305,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T02:51:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1264,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T02:56:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1264,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T03:01:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1223,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T03:06:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1223,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T03:11:39.456Z"
}, {
  "srChange": -44,
  "newSr": 1179,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T03:16:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1222,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T03:21:39.456Z"
}, {
  "srChange": 41,
  "newSr": 1263,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T03:26:39.456Z"
}, {
  "srChange": -42,
  "newSr": 1221,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T03:31:39.456Z"
}, {
  "srChange": 44,
  "newSr": 1265,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T03:36:39.456Z"
}, {
  "srChange": 40,
  "newSr": 1305,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T03:41:39.456Z"
}, {
  "srChange": -44,
  "newSr": 1261,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T03:46:39.456Z"
}, {
  "srChange": 44,
  "newSr": 1305,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T03:51:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1348,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T03:56:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1348,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T04:01:39.456Z"
}, {
  "srChange": 44,
  "newSr": 1392,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T04:06:39.456Z"
}, {
  "srChange": 42,
  "newSr": 1434,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T04:11:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1434,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T04:16:39.456Z"
}, {
  "srChange": 44,
  "newSr": 1478,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T04:21:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1478,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T04:26:39.456Z"
}, {
  "srChange": 41,
  "newSr": 1519,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T04:31:39.456Z"
}, {
  "srChange": 44,
  "newSr": 1563,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T04:36:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1522,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T04:41:39.456Z"
}, {
  "srChange": 40,
  "newSr": 1562,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T04:46:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1562,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T04:51:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1521,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T04:56:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1564,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T05:01:39.456Z"
}, {
  "srChange": -43,
  "newSr": 1521,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T05:06:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1480,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T05:11:39.456Z"
}, {
  "srChange": -44,
  "newSr": 1436,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T05:16:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1479,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T05:21:39.456Z"
}, {
  "srChange": 42,
  "newSr": 1521,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T05:26:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1564,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T05:31:39.456Z"
}, {
  "srChange": 40,
  "newSr": 1604,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T05:36:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1563,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T05:41:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1563,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T05:46:39.456Z"
}, {
  "srChange": 40,
  "newSr": 1603,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T05:51:39.456Z"
}, {
  "srChange": 42,
  "newSr": 1645,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T05:56:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1688,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T06:01:39.456Z"
}, {
  "srChange": -44,
  "newSr": 1644,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T06:06:39.456Z"
}, {
  "srChange": 40,
  "newSr": 1684,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T06:11:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1684,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T06:16:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1727,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T06:21:39.456Z"
}, {
  "srChange": 44,
  "newSr": 1771,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T06:26:39.456Z"
}, {
  "srChange": 44,
  "newSr": 1815,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T06:31:39.456Z"
}, {
  "srChange": -43,
  "newSr": 1772,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T06:36:39.456Z"
}, {
  "srChange": -40,
  "newSr": 1732,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T06:41:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1732,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T06:46:39.456Z"
}, {
  "srChange": 40,
  "newSr": 1772,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T06:51:39.456Z"
}, {
  "srChange": -44,
  "newSr": 1728,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T06:56:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1771,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T07:01:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1771,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T07:06:39.456Z"
}, {
  "srChange": 44,
  "newSr": 1815,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T07:11:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1774,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T07:16:39.456Z"
}, {
  "srChange": 40,
  "newSr": 1814,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T07:21:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1814,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T07:26:39.456Z"
}, {
  "srChange": 42,
  "newSr": 1856,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T07:31:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1856,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T07:36:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1856,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T07:41:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1856,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T07:46:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1899,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T07:51:39.456Z"
}, {
  "srChange": 42,
  "newSr": 1941,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T07:56:39.456Z"
}, {
  "srChange": 43,
  "newSr": 1984,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T08:01:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1984,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T08:06:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2025,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T08:11:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2069,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T08:16:39.456Z"
}, {
  "srChange": -44,
  "newSr": 2025,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T08:21:39.456Z"
}, {
  "srChange": -43,
  "newSr": 1982,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T08:26:39.456Z"
}, {
  "srChange": -40,
  "newSr": 1942,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T08:31:39.456Z"
}, {
  "srChange": 44,
  "newSr": 1986,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T08:36:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2030,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T08:41:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2030,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T08:46:39.456Z"
}, {
  "srChange": -41,
  "newSr": 1989,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T08:51:39.456Z"
}, {
  "srChange": 0,
  "newSr": 1989,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T08:56:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2033,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T09:01:39.456Z"
}, {
  "srChange": 42,
  "newSr": 2075,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T09:06:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2116,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T09:11:39.456Z"
}, {
  "srChange": 40,
  "newSr": 2156,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T09:16:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2156,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T09:21:39.456Z"
}, {
  "srChange": 43,
  "newSr": 2199,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T09:26:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2199,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T09:31:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2199,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T09:36:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2240,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T09:41:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2240,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T09:46:39.456Z"
}, {
  "srChange": -43,
  "newSr": 2197,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T09:51:39.456Z"
}, {
  "srChange": 42,
  "newSr": 2239,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T09:56:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2283,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T10:01:39.456Z"
}, {
  "srChange": -42,
  "newSr": 2241,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T10:06:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2241,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T10:11:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2241,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T10:16:39.456Z"
}, {
  "srChange": -42,
  "newSr": 2199,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T10:21:39.456Z"
}, {
  "srChange": -40,
  "newSr": 2159,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T10:26:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2159,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T10:31:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2203,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T10:36:39.456Z"
}, {
  "srChange": 40,
  "newSr": 2243,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T10:41:39.456Z"
}, {
  "srChange": -44,
  "newSr": 2199,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T10:46:39.456Z"
}, {
  "srChange": 42,
  "newSr": 2241,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T10:51:39.456Z"
}, {
  "srChange": -44,
  "newSr": 2197,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T10:56:39.456Z"
}, {
  "srChange": 40,
  "newSr": 2237,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T11:01:39.456Z"
}, {
  "srChange": -40,
  "newSr": 2197,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T11:06:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2241,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T11:11:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2241,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T11:16:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2241,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T11:21:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2241,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T11:26:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2241,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T11:31:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2241,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T11:36:39.456Z"
}, {
  "srChange": 42,
  "newSr": 2283,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T11:41:39.456Z"
}, {
  "srChange": -42,
  "newSr": 2241,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T11:46:39.456Z"
}, {
  "srChange": 40,
  "newSr": 2281,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T11:51:39.456Z"
}, {
  "srChange": 42,
  "newSr": 2323,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T11:56:39.456Z"
}, {
  "srChange": 40,
  "newSr": 2363,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T12:01:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2407,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T12:06:39.456Z"
}, {
  "srChange": -40,
  "newSr": 2367,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T12:11:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2367,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T12:16:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2367,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T12:21:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2411,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T12:26:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2452,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T12:31:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2452,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T12:36:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2496,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T12:41:39.456Z"
}, {
  "srChange": 42,
  "newSr": 2538,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T12:46:39.456Z"
}, {
  "srChange": -41,
  "newSr": 2497,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T12:51:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2538,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T12:56:39.456Z"
}, {
  "srChange": 42,
  "newSr": 2580,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T13:01:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2624,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T13:06:39.456Z"
}, {
  "srChange": 43,
  "newSr": 2667,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T13:11:39.456Z"
}, {
  "srChange": 43,
  "newSr": 2710,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T13:16:39.456Z"
}, {
  "srChange": -40,
  "newSr": 2670,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T13:21:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2714,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T13:26:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2758,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T13:31:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2799,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T13:36:39.456Z"
}, {
  "srChange": -41,
  "newSr": 2758,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T13:41:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2758,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T13:46:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2758,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T13:51:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2799,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T13:56:39.456Z"
}, {
  "srChange": 40,
  "newSr": 2839,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T14:01:39.456Z"
}, {
  "srChange": -40,
  "newSr": 2799,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T14:06:39.456Z"
}, {
  "srChange": -43,
  "newSr": 2756,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T14:11:39.456Z"
}, {
  "srChange": 42,
  "newSr": 2798,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T14:16:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2798,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T14:21:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2798,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T14:26:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2839,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T14:31:39.456Z"
}, {
  "srChange": -40,
  "newSr": 2799,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T14:36:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2799,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T14:41:39.456Z"
}, {
  "srChange": 43,
  "newSr": 2842,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T14:46:39.456Z"
}, {
  "srChange": 40,
  "newSr": 2882,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T14:51:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2923,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T14:56:39.456Z"
}, {
  "srChange": -42,
  "newSr": 2881,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T15:01:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2881,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T15:06:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2925,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T15:11:39.456Z"
}, {
  "srChange": -43,
  "newSr": 2882,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T15:16:39.456Z"
}, {
  "srChange": 42,
  "newSr": 2924,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T15:21:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2968,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T15:26:39.456Z"
}, {
  "srChange": -44,
  "newSr": 2924,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T15:31:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2924,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T15:36:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2924,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T15:41:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2924,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T15:46:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2924,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T15:51:39.456Z"
}, {
  "srChange": 43,
  "newSr": 2967,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T15:56:39.456Z"
}, {
  "srChange": -42,
  "newSr": 2925,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T16:01:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2966,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T16:06:39.456Z"
}, {
  "srChange": -43,
  "newSr": 2923,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T16:11:39.456Z"
}, {
  "srChange": -43,
  "newSr": 2880,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T16:16:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2880,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T16:21:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2880,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T16:26:39.456Z"
}, {
  "srChange": -40,
  "newSr": 2840,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T16:31:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2840,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T16:36:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2884,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T16:41:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2884,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T16:46:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2925,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T16:51:39.456Z"
}, {
  "srChange": 40,
  "newSr": 2965,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T16:56:39.456Z"
}, {
  "srChange": -40,
  "newSr": 2925,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T17:01:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2925,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T17:06:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2966,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T17:11:39.456Z"
}, {
  "srChange": -44,
  "newSr": 2922,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T17:16:39.456Z"
}, {
  "srChange": -41,
  "newSr": 2881,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T17:21:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2922,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T17:26:39.456Z"
}, {
  "srChange": -43,
  "newSr": 2879,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T17:31:39.456Z"
}, {
  "srChange": -40,
  "newSr": 2839,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T17:36:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2839,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T17:41:39.456Z"
}, {
  "srChange": 40,
  "newSr": 2879,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T17:46:39.456Z"
}, {
  "srChange": -43,
  "newSr": 2836,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T17:51:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2836,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T17:56:39.456Z"
}, {
  "srChange": -43,
  "newSr": 2793,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T18:01:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2834,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T18:06:39.456Z"
}, {
  "srChange": 44,
  "newSr": 2878,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T18:11:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2878,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T18:16:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2878,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T18:21:39.456Z"
}, {
  "srChange": 42,
  "newSr": 2920,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T18:26:39.456Z"
}, {
  "srChange": 43,
  "newSr": 2963,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T18:31:39.456Z"
}, {
  "srChange": 44,
  "newSr": 3007,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T18:36:39.456Z"
}, {
  "srChange": 43,
  "newSr": 3050,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T18:41:39.456Z"
}, {
  "srChange": -43,
  "newSr": 3007,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T18:46:39.456Z"
}, {
  "srChange": -43,
  "newSr": 2964,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T18:51:39.456Z"
}, {
  "srChange": -41,
  "newSr": 2923,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T18:56:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2964,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T19:01:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2964,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T19:06:39.456Z"
}, {
  "srChange": -43,
  "newSr": 2921,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T19:11:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2921,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T19:16:39.456Z"
}, {
  "srChange": -42,
  "newSr": 2879,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T19:21:39.456Z"
}, {
  "srChange": -40,
  "newSr": 2839,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T19:26:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2839,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T19:31:39.456Z"
}, {
  "srChange": 42,
  "newSr": 2881,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T19:36:39.456Z"
}, {
  "srChange": 41,
  "newSr": 2922,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T19:41:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2922,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T19:46:39.456Z"
}, {
  "srChange": -40,
  "newSr": 2882,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T19:51:39.456Z"
}, {
  "srChange": -40,
  "newSr": 2842,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T19:56:39.456Z"
}, {
  "srChange": 43,
  "newSr": 2885,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T20:01:39.456Z"
}, {
  "srChange": 40,
  "newSr": 2925,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T20:06:39.456Z"
}, {
  "srChange": 0,
  "newSr": 2925,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T20:11:39.456Z"
}, {
  "srChange": 42,
  "newSr": 2967,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T20:16:39.456Z"
}, {
  "srChange": 43,
  "newSr": 3010,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T20:21:39.456Z"
}, {
  "srChange": 43,
  "newSr": 3053,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T20:26:39.456Z"
}, {
  "srChange": 41,
  "newSr": 3094,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T20:31:39.456Z"
}, {
  "srChange": 41,
  "newSr": 3135,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T20:36:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3135,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T20:41:39.456Z"
}, {
  "srChange": 42,
  "newSr": 3177,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T20:46:39.456Z"
}, {
  "srChange": 43,
  "newSr": 3220,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T20:51:39.456Z"
}, {
  "srChange": -44,
  "newSr": 3176,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T20:56:39.456Z"
}, {
  "srChange": -43,
  "newSr": 3133,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T21:01:39.456Z"
}, {
  "srChange": 40,
  "newSr": 3173,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T21:06:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3173,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T21:11:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3173,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T21:16:39.456Z"
}, {
  "srChange": 42,
  "newSr": 3215,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T21:21:39.456Z"
}, {
  "srChange": -41,
  "newSr": 3174,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T21:26:39.456Z"
}, {
  "srChange": 41,
  "newSr": 3215,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T21:31:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3215,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-17T21:36:39.456Z"
}, {
  "srChange": 44,
  "newSr": 3259,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T21:41:39.456Z"
}, {
  "srChange": -42,
  "newSr": 3217,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T21:46:39.456Z"
}, {
  "srChange": 44,
  "newSr": 3261,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T21:51:39.456Z"
}, {
  "srChange": 41,
  "newSr": 3302,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T21:56:39.456Z"
}, {
  "srChange": -44,
  "newSr": 3258,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T22:01:39.456Z"
}, {
  "srChange": 40,
  "newSr": 3298,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T22:06:39.456Z"
}, {
  "srChange": 44,
  "newSr": 3342,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T22:11:39.456Z"
}, {
  "srChange": 42,
  "newSr": 3384,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-17T22:16:39.456Z"
}, {
  "srChange": 41,
  "newSr": 3425,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T22:21:39.456Z"
}, {
  "srChange": 44,
  "newSr": 3469,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T22:26:39.456Z"
}, {
  "srChange": 43,
  "newSr": 3512,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T22:31:39.456Z"
}, {
  "srChange": 40,
  "newSr": 3552,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T22:36:39.456Z"
}, {
  "srChange": 44,
  "newSr": 3596,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T22:41:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3596,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T22:46:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3596,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T22:51:39.456Z"
}, {
  "srChange": 40,
  "newSr": 3636,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Volskaya Industries",
    "shortName": "Volskaya",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T22:56:39.456Z"
}, {
  "srChange": -42,
  "newSr": 3594,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T23:01:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3594,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T23:06:39.456Z"
}, {
  "srChange": -44,
  "newSr": 3550,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T23:11:39.456Z"
}, {
  "srChange": 41,
  "newSr": 3591,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T23:16:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3591,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T23:21:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3591,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-17T23:26:39.456Z"
}, {
  "srChange": -44,
  "newSr": 3547,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-17T23:31:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3547,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-17T23:36:39.456Z"
}, {
  "srChange": -43,
  "newSr": 3504,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T23:41:39.456Z"
}, {
  "srChange": 40,
  "newSr": 3544,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T23:46:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3544,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-17T23:51:39.456Z"
}, {
  "srChange": -42,
  "newSr": 3502,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-17T23:56:39.456Z"
}, {
  "srChange": -40,
  "newSr": 3462,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T00:01:39.456Z"
}, {
  "srChange": -44,
  "newSr": 3418,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-18T00:06:39.456Z"
}, {
  "srChange": 43,
  "newSr": 3461,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-18T00:11:39.456Z"
}, {
  "srChange": -42,
  "newSr": 3419,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-18T00:16:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3419,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T00:21:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3419,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T00:26:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3419,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-18T00:31:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3419,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T00:36:39.456Z"
}, {
  "srChange": 40,
  "newSr": 3459,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T00:41:39.456Z"
}, {
  "srChange": 40,
  "newSr": 3499,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-18T00:46:39.456Z"
}, {
  "srChange": 41,
  "newSr": 3540,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T00:51:39.456Z"
}, {
  "srChange": -42,
  "newSr": 3498,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-18T00:56:39.456Z"
}, {
  "srChange": -42,
  "newSr": 3456,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-18T01:01:39.456Z"
}, {
  "srChange": 44,
  "newSr": 3500,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T01:06:39.456Z"
}, {
  "srChange": -41,
  "newSr": 3459,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-18T01:11:39.456Z"
}, {
  "srChange": 41,
  "newSr": 3500,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-18T01:16:39.456Z"
}, {
  "srChange": -43,
  "newSr": 3457,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Blizzard World",
    "shortName": "Blizz World",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-18T01:21:39.456Z"
}, {
  "srChange": 42,
  "newSr": 3499,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "King's Row",
    "shortName": "King's Row",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-18T01:26:39.456Z"
}, {
  "srChange": 43,
  "newSr": 3542,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-18T01:31:39.456Z"
}, {
  "srChange": 44,
  "newSr": 3586,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Junkertown",
    "shortName": "Junkertown",
    "type": "Escort"
  },
  "playedAt": "2018-06-18T01:36:39.456Z"
}, {
  "srChange": -42,
  "newSr": 3544,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-18T01:41:39.456Z"
}, {
  "srChange": 42,
  "newSr": 3586,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Oasis",
    "shortName": "Oasis",
    "type": "Control"
  },
  "playedAt": "2018-06-18T01:46:39.456Z"
}, {
  "srChange": 42,
  "newSr": 3628,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-18T01:51:39.456Z"
}, {
  "srChange": -42,
  "newSr": 3586,
  "heroes": [{
    "name": "Orisa",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T01:56:39.456Z"
}, {
  "srChange": 40,
  "newSr": 3626,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-18T02:01:39.456Z"
}, {
  "srChange": -44,
  "newSr": 3582,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-18T02:06:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3582,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-18T02:11:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3582,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-18T02:16:39.456Z"
}, {
  "srChange": 44,
  "newSr": 3626,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T02:21:39.456Z"
}, {
  "srChange": 42,
  "newSr": 3668,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Numbani",
    "shortName": "Numbani",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-18T02:26:39.456Z"
}, {
  "srChange": 42,
  "newSr": 3710,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T02:31:39.456Z"
}, {
  "srChange": 42,
  "newSr": 3752,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-18T02:36:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3752,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T02:41:39.456Z"
}, {
  "srChange": 40,
  "newSr": 3792,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-18T02:46:39.456Z"
}, {
  "srChange": 42,
  "newSr": 3834,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T02:51:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3834,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-18T02:56:39.456Z"
}, {
  "srChange": -43,
  "newSr": 3791,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-18T03:01:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3791,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-18T03:06:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3791,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-18T03:11:39.456Z"
}, {
  "srChange": 43,
  "newSr": 3834,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Nepal",
    "shortName": "Nepal",
    "type": "Control"
  },
  "playedAt": "2018-06-18T03:16:39.456Z"
}, {
  "srChange": 44,
  "newSr": 3878,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Hanamura",
    "shortName": "Hanamura",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T03:21:39.456Z"
}, {
  "srChange": -43,
  "newSr": 3835,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Watchpoint: Gibraltar",
    "shortName": "Gibraltar",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-18T03:26:39.456Z"
}, {
  "srChange": 42,
  "newSr": 3877,
  "heroes": [{
    "name": "Torbjörn",
    "role": "Defense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Lijang Tower",
    "shortName": "Lijang",
    "type": "Control"
  },
  "playedAt": "2018-06-18T03:31:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3877,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Dorado",
    "shortName": "Dorado",
    "type": "Escort"
  },
  "playedAt": "2018-06-18T03:36:39.456Z"
}, {
  "srChange": 42,
  "newSr": 3919,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Torbjörn",
    "role": "Defense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-18T03:41:39.456Z"
}, {
  "srChange": 44,
  "newSr": 3963,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "Orisa",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Horizon Lunar Colony",
    "shortName": "Horizon",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T03:46:39.456Z"
}, {
  "srChange": 0,
  "newSr": 3963,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Temple of Anubis",
    "shortName": "Anubis",
    "type": "Assault"
  },
  "playedAt": "2018-06-18T03:51:39.456Z"
}, {
  "srChange": 41,
  "newSr": 4004,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }, {
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Hollywood",
    "shortName": "Hollywood",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-18T03:56:39.456Z"
}, {
  "srChange": 43,
  "newSr": 4047,
  "heroes": [{
    "name": "D.Va",
    "role": "Tank"
  }, {
    "name": "D.Va",
    "role": "Tank"
  }
  ],
  "map": {
    "name": "Eichenwalde",
    "shortName": "Eichenwalde",
    "type": "Hybrid"
  },
  "playedAt": "2018-06-18T04:01:39.456Z"
}, {
  "srChange": 40,
  "newSr": 4087,
  "heroes": [{
    "name": "Sombra",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Ilios",
    "shortName": "Ilios",
    "type": "Control"
  },
  "playedAt": "2018-06-18T04:06:39.456Z"
}, {
  "srChange": 42,
  "newSr": 4129,
  "heroes": [{
    "name": "Pharah",
    "role": "Offense"
  }
  ],
  "map": {
    "name": "Rialto",
    "shortName": "Rialto",
    "type": "Escort"
  },
  "playedAt": "2018-06-18T04:11:39.456Z"
}];

module.exports = staticData;