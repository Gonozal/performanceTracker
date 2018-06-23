// @flow
import React, { Component } from 'react';
import { ipcRenderer } from 'electron';

import Rank from './Rank';
import RankChart from './RankChart';
import {
  mapTypes,
  maps,
  heroRoles,
  heroes
} from '../store/mockData';

import matchHistory from '../store/matchHistory.json';

import MatchHistory from './MatchHistory';
import MapStatisticsTable from './MapStatisticsTable';

type Props = {};

export default class Statistics extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      matchHistory,
      mapTypes,
      maps,
      heroRoles,
      heroes,
    };
  }

  componentDidMount() {
    ipcRenderer.removeAllListeners("addNewMatch");
    ipcRenderer.on('addNewMatch', (event, newMatch) => {
      this.addMatch(newMatch);
    });
  }

  addMatch(newMatch){
    const newMatchHistory = [
      ...this.state.matchHistory,
      Object.assign(newMatch, {
        srChange: newMatch.newSr - this.state.matchHistory[this.state.matchHistory.length-1].newSr
      })
    ];
    this.setState({ matchHistory: newMatchHistory });
    ipcRenderer.send("saveMatchHistory", newMatchHistory);
  }

  matches(){
    return this.state.matchHistory.map((e, i) => {
      const streak = this.winLossStreak(i);
      return Object.assign(e, {streak});
    });
  }

  winLossStreak(index: number): number{
    let n = 0;
    for(let i = index; i >= 0; i -= 1){
      if(Math.sign(this.state.matchHistory[i].srChange) * Math.sign(n) >= 0){
        n += Math.sign(this.state.matchHistory[i].srChange);
      } else {
        break;
      }
    }
    return n
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{marginTop: 10, marginBottom: 10}}>
          <div className="col-12">
            <div className="card" style={{maxHeight: 130, height: 130}}>
              <div className="card-body row">
                <div className="col-1 align-middle text-center">
                  <Rank rank={this.matches()[this.matches().length - 1].newSr} />
                </div>
                <div className="col-2">
                  <RankChart matchHistory={this.matches()} />
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
            <MatchHistory matchHistory={[...this.matches()].reverse()} />
          </div>
          <div className="col-8" style={{overflow: 'auto', maxHeight: "calc(100vh - 190px)"}}>
            <MapStatisticsTable
              matchHistory={this.state.matchHistory}
              elementTypes={this.state.mapTypes}
              elements={this.state.maps}
              statisticFor="map"
            />

            <MapStatisticsTable
              matchHistory={this.state.matchHistory}
              elementTypes={this.state.heroRoles}
              elements={this.state.heroes}
              statisticFor="heroes"
            />
          </div>
        </div>
      </div>
    );
  }
}
