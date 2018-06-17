// @flow
import React, { Component } from 'react';

import Rank from './Rank';
import RankChart from './RankChart';
import {
  matchHistory,
  mapTypes,
  maps,
  heroRoles,
  heroes
} from '../store/mockData';

import MatchHistory from './MatchHistory';
import MapStatisticsTable from './MapStatisticsTable';

type Props = {};


const winLossStreak = (index: number): number => {
  let n = 0;
  for(let i = index; i >= 0; i -= 1){
    if(Math.sign(matchHistory[i].srChange) * Math.sign(n) >= 0){
      n += Math.sign(matchHistory[i].srChange);
    } else {
      break;
    }
  }
  return n
};

const matches = matchHistory.map((e, i) => {
  const streak = winLossStreak(i);
  return Object.assign(e, {streak});
});

export default class Statistics extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{marginTop: 10, marginBottom: 10}}>
          <div className="col-12">
            <div className="card" style={{maxHeight: 130, height: 130}}>
              <div className="card-body row">
                <div className="col-1 align-middle text-center">
                  <Rank rank={matches[matches.length - 1].newSr} />
                </div>
                <div className="col-2">
                  <RankChart matchHistory={matches} />
                </div>
                <div className="col-9">
                  <span className="black-text">
                    Important stats. Career High/low. Wins/losses. Current streak etc.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4" style={{overflow: 'auto', maxHeight: "calc(100vh - 190px)"}}>
            <MatchHistory matchHistory={[...matches].reverse()} />
          </div>
          <div className="col-8" style={{overflow: 'auto', maxHeight: "calc(100vh - 190px)"}}>
            <MapStatisticsTable
              matchHistory={matchHistory}
              elementTypes={mapTypes}
              elements={maps}
              statisticFor="map"
            />

            <MapStatisticsTable
              matchHistory={matchHistory}
              elementTypes={heroRoles}
              elements={heroes}
              statisticFor="heroes"
            />
          </div>
        </div>
      </div>
    );
  }
}
