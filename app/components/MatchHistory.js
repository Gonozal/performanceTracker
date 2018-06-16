// @flow
import React, { Component} from 'react';
import ReactList from 'react-list';
import moment from 'moment';
import Rank from './Rank';

type map = {name: string, shortName: string, type: string};
type hero = {name: string, role: string};
type heroes = Array<hero>;
type match = {srChange: number, newSr: number, map: map, heroes: heroes, playedAt: string};
type Props = {matchHistory: Array<match>};

export default class MatchHistory extends Component<Props> {
  props: Props;

  static winLossText(currentMatch: match){
    if(currentMatch.srChange === 0){
      return(<span className="grey-text text-darken-1">D (0)</span>)
    } else if(currentMatch.srChange < 0){
      return(<span className="red-text text-darken-3">{`L (${currentMatch.srChange})`}</span>)
    }
    return(<span className="green-text text-darken-3">{`W (+${currentMatch.srChange})`}</span>)
  }

  winLossStreak(index){
    let n = 0;
    const { matchHistory } = this.props;
    for(let i = index; i >= 0; i -= 1){
      if(Math.sign(matchHistory[i].srChange) * Math.sign(n) >= 0){
        n += Math.sign(matchHistory[i].srChange);
      } else {
        break;
      }
    }
    if(n === 0){
      return(<span className="grey-text text-darken-1">{n}</span>)
    } else if(n < 0){
      return(<span className="red-text text-darken-3">{n}</span>)
    }
    return(<span className="green-text text-darken-3">{n}</span>)
  }


  renderItem(index: number, key: number){
    const currentMatch = this.props.matchHistory[index];
    return(
      <div className="row" key={key}>
        <div className="col s1 grey-text">
          {index}
        </div>
        <div className="col s5">
          <Rank rank={currentMatch.newSr} inline hideSr />
          &nbsp; {MatchHistory.winLossText(currentMatch)}
        </div>
        <div className="col s1">
          {this.winLossStreak(index)}
        </div>
        <div className="col s5">
          {moment(currentMatch.playedAt).format("ddd, Do MMM Y")}
        </div>
      </div>
    );
  }

  render() {
    return (
      <ReactList
        itemRenderer={::this.renderItem}
        length={this.props.matchHistory.length}
        type='uniform'
      />
    )
  }
}
