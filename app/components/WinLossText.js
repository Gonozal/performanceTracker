// @flow
import React, { Component } from 'react';

type Props = {
  srChange: number
};

export default class WinLossText extends Component<Props> {
  props: Props;

  render() {
    const { srChange } = this.props;
    if(srChange === 0){
      return(<span className="text-muted">D (0)</span>)
    } else if(srChange < 0){
      return(<span className="text-danger">{`L (${srChange})`}</span>)
    }
    return(<span className="text-success">{`W (+${srChange})`}</span>)
    }
}
