// @flow
import React, { Component} from 'react';
import moment from 'moment';
import Rank from './Rank';
import WinLossStreak from'./WinLossStreak';
import WinLossText from'./WinLossText';

type Map = {name: string, shortName: string, type: string, aggregate?: boolean};
type Hero = {name: string, type: string};
type Heroes = Array<Hero>;
type Match = {srChange: number, newSr: number, map: Map, heroes: Heroes, playedAt: string};
type Props = {matchHistory: Array<Match>};

export default class MatchHistory extends Component<Props> {
  props: Props;

  static renderWinLossStreak(streak) {
    if (streak === 0) {
      return (<span className="grey-text text-darken-1">{streak}</span>)
    } else if (streak < 0) {
      return (<span className="red-text text-darken-3">{streak}</span>)
    }
    return (<span className="green-text text-darken-3">{streak}</span>)
  }


  renderItem(index: number, key: number){
    const matches = this.props.matchHistory.length;
    const currentMatch = this.props.matchHistory[index];
    return(
      <div className="row" key={key}>
        <div className="col-1 grey-text">
          {matches - index}
        </div>
        <div className="col-5">
          <Rank rank={currentMatch.newSr} inline hideSr />
          &nbsp;
          <WinLossText srChange={currentMatch.srChange} />
        </div>
        <div className="col-1">
          {MatchHistory.renderWinLossStreak(currentMatch.streak)}
        </div>
        <div className="col-5">
          {moment(currentMatch.playedAt).format("ddd, Do MMM Y")}
        </div>
      </div>
    );
  }

  render() {
    const { matchHistory } = this.props;
    return (
      <div>
        {matchHistory.map((e, i) => this.renderItem(i, i))}
      </div>
    )
  }
}
