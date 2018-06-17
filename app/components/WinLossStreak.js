// @flow
import React, { Component } from 'react';

type Props = {
  streak: number
};

export default class WinLossStreak extends Component<Props> {
  props: Props;

  render() {
    const {streak} = this.props;
    if (streak === 0) {
      return (<span className="grey-text text-darken-1">{streak}</span>)
    } else if (streak < 0) {
      return (<span className="red-text text-darken-3">{streak}</span>)
    }
    return (<span className="green-text text-darken-3">{streak}</span>)
  }
}
