// @flow
import React, { Component } from 'react';

import Rank from './Rank';
import RankChart from './RankChart';
import { matchHistory } from '../store/mockData';

import MatchHistory from './MatchHistory';


type Props = {};



export default class Counter extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="card-panel grey lighten-5 ">
              <div className="valign-wrapper">
                <div className="col s2 l1 center-align">
                  <Rank rank={matchHistory[matchHistory.length - 1].newSr} />
                </div>
                <div className="col s2">
                  <RankChart matchHistory={matchHistory} />
                </div>
                <div className="col s8 l9">
                  <span className="black-text">
                    Important stats. Career High/low. Wins/losses. Current streak etc.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s4" style={{overflow: 'auto', maxHeight: 600, height: 600}}>
            <MatchHistory matchHistory={matchHistory} />
          </div>
        </div>
      </div>
    );
  }
}
