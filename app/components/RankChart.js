// @flow
import React, { Component} from 'react';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  YAxis
} from 'recharts';

type map = {name: string, shortName: string, type: string};
type hero = {name: string, role: string};
type heroes = Array<hero>;
type match = {srChange: number, newSr: number, map: map, heroes: heroes, playedAt: string};
type Props = {matchHistory: Array<match>};

const rankColors = [
  {from:    0, to: 1499, color: "#a55142", name: "bronze"},
  {from: 1500, to: 1999, color: "#868686", name: "silver"},
  {from: 2000, to: 2499, color: "#c6a65a", name: "gold"},
  {from: 2500, to: 2999, color: "#a2c6ce", name: "platinum"},
  {from: 3000, to: 3499, color: "#706fa7", name: "diamond"},
  {from: 3500, to: 3999, color: "#fae399", name: "master"},
  {from: 4000, to: 5000, color: "#f7ba52", name: "grandmaster"},
];


const clamp = (min, val, max) => Math.min(Math.max(min, val), max);

export default class RankChart extends Component<Props> {
  props: Props;

  colorStops() {
    const maxSr = Math.max(...this.props.matchHistory.map(o => o.newSr));
    const minSr = Math.min(...this.props.matchHistory.map(o => o.newSr));
    const filteredRanks = rankColors.filter(rank => rank.from < maxSr && rank.to > minSr).sort((a, b) => b.from - a.from);

    return (filteredRanks.reduce((stops, rank) => {
      const newStops = [
        {percent: `${clamp(0, 1 - (rank.to   - minSr) / (maxSr - minSr), 1) * 100}%`, name: "start"},
        {percent: `${clamp(0, 1 - (rank.from - minSr) / (maxSr - minSr), 1) * 100}%`, name: "stop"},
      ].map(e => <stop offset={e.percent} stopColor={rank.color} stopOpacity={1} key={`${rank.name}${e.name}`} />);
      return stops.concat(newStops);
    }, []));
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height={80}>
        <LineChart data={this.props.matchHistory}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              {this.colorStops()}
            </linearGradient>
          </defs>
          <Line type='monotone' dataKey='newSr' stroke='url(#colorPv)' strokeWidth={2} dot={false} />
          <YAxis type="number" domain={['dataMin', 'dataMax']} hide />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}
