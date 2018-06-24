// @flow
import React, { Component } from 'react';

type Map = {name: string, type: string, shortName: string};
type Statistic = {name: string, type: string, played: number, wins: number, losses: number, draws: number};
type Statistics = {Overall?: Statistic, [string]: Statistic};
type Hero = {name: string, type: string};
type Heroes = Array<Hero>;
type Match = {srChange: number, newSr: number, map: Map, heroes: Heroes, playedAt: string};
type Element = Map | Hero;

type Props = {
  matchHistory: Array<Match>,
  elements: Array<Element>,
  elementTypes: Array<string>,
  statisticFor: "map" | "heroes"
};

const sortElements = (a,b) => {
  if(a.type < b.type) {return -1}
  if(a.type > b.type) {return 1}
  if(a.name < b.name) {return -1}
  if(a.name > b.name) {return 1}
  return 0
};

export default class MapStatisticsTable extends Component<Props> {
  props: Props;

  static renderMapRow(statistic: Statistic, playedOverall: number, highlight: boolean = false){
    return(
      <tr key={statistic.name} className={highlight? "bg-light border-bottom border-dark" : ""}>
        <td>{statistic.name}</td>
        <td>{`${Math.round(statistic.played  / (playedOverall || 1) * 1000) / 10}%`}</td>
        <td className="text-secondary">{statistic.played}</td>
        <td className="text-secondary">{statistic.wins}</td>
        <td className="text-secondary">{statistic.losses}</td>
        <td className="text-secondary">{statistic.draws}</td>
        <td className="text-success">{`${Math.round(statistic.wins   / (statistic.played || 1) * 1000) / 10}%`}</td>
        <td className="text-danger"> {`${Math.round(statistic.losses / (statistic.played || 1) * 1000) / 10}%`}</td>
        <td className="text-muted">  {`${Math.round(statistic.draws  / (statistic.played || 1) * 1000) / 10}%`}</td>
      </tr>
    )
  }

  generateMapStatistics() {
    const { matchHistory, elements, statisticFor} = this.props;
    const rawMapStatistic: Statistics = elements.reduce((statistics: Statistics, element: Element) => {
      return Object.assign(
        statistics,
        {[element.name]: {name: element.name, type: element.type, played: 0, wins: 0, losses: 0, draws: 0}}
      )
    }, {});

    return matchHistory.reduce((statistics: Statistics, match: Match) => {
      const overallStatistic = Object.assign({}, statistics.Overall);
      const element          = Array.isArray(match[statisticFor]) ? match[statisticFor][0] : match[statisticFor];
      const typeStatistic    = Object.assign({}, statistics[element.type]);
      const statistic        = Object.assign({}, statistics[element.name]);
      overallStatistic.played += 1;
      typeStatistic.played += 1;
      statistic.played     += 1;

      if(match.srChange > 0){
        overallStatistic.wins += 1;
        typeStatistic.wins += 1;
        statistic.wins     += 1;
      } else if(match.srChange < 0){
        overallStatistic.losses += 1;
        typeStatistic.losses += 1;
        statistic.losses     += 1;
      } else {
        overallStatistic.draws += 1;
        typeStatistic.draws += 1;
        statistic.draws     += 1;
      }

      return(Object.assign(
        statistics, {
          "Overall": overallStatistic,
          [element.type]: typeStatistic,
          [element.name]: statistic
        }
      ))
    }, rawMapStatistic)
  }

  renderMapsOfType(statistics: Statistics, elementType: string){
    const elements = this.props.elements.filter(e => e.type === elementType);
    return [...elements.sort(sortElements).map(element => {
      const statistic = statistics[element.name];
      return (MapStatisticsTable.renderMapRow(statistic, statistics.Overall.played))
    }), MapStatisticsTable.renderMapRow(statistics[elementType], statistics.Overall.played, true)];
  }

  render() {
    const { elementTypes, statisticFor } = this.props;
    const statistics = this.generateMapStatistics();
    return(
      <table className="table table-sm table-borderless">
        <colgroup>
          <col style={{width: "28%"}} />
          {
            [...Array(5).keys()].map(e => <col key={e} style={{width: "9%"}} />)
          }
        </colgroup>
        <thead>
          <tr>
            <th className="text-capitalize" scope="col">{statisticFor.replace("es", "")}</th>
            <th scope="col">Played %</th>
            <th scope="col">Played</th>
            <th scope="col">Won</th>
            <th scope="col">Lost</th>
            <th scope="col">Tied</th>
            <th scope="col">Won%</th>
            <th scope="col">Lost%</th>
            <th scope="col">Tied%</th>
          </tr>
        </thead>
        <tbody>
          {
            elementTypes.map(elementType => {
              return this.renderMapsOfType(statistics, elementType);
            })
          }
          { MapStatisticsTable.renderMapRow(statistics.Overall, statistics.Overall.played) }
        </tbody>
      </table>
    );
  }
}
