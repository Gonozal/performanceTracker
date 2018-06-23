// @flow
import React, { Component } from 'react';
import { remote, ipcRenderer } from 'electron';

import Combobox from 'react-widgets/lib/Combobox';
import Multiselect from 'react-widgets/lib/Multiselect';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

import Rank from './Rank';
import { maps, heroes } from '../store/mockData';

import matchHistory from '../store/matchHistory.json';


Moment.locale('en');
momentLocalizer();

type Props = {};

const emptyMap =  { name: "", shortName: "", type: "" , valid: false};


export default class MatchEntry extends Component<Props> {
  props: Props;

  static abort(){
    remote.getCurrentWindow().hide();
  }

  constructor(props) {
    super(props);
    this.state = {
      newSr: matchHistory[matchHistory.length - 1].newSr,
      map: emptyMap,
      heroes: [],
      errors: {}
    };
  }

  submit(e){
    e.preventDefault();
    const errors = {};
    if(!(this.state.map instanceof Object)){
      errors.map = {message: "No map selected. Please select a map from the list."}
    } else if(maps.indexOf(this.state.map) === -1){
      errors.map = {message: "Invalid map. Please select a map from the list."}
    }
    if(this.state.heroes.length === 0){
      errors.heroes = {message: "No hero selected, please select at least one."}
    }
    if(!this.state.newSr){
      errors.newSr = {message: "SR Value invalid. Please enter a number between 0 and 5000."}
    } else if(this.state.newSr > 5000 || this.state.newSr <= 0){
      errors.newSr = {message: "SR value outside possible range. Please enter a number between 0 and 5000."}
    }
    this.setState({errors});
    if(Object.keys(errors).length === 0){
      ipcRenderer.send("submitMatch", {
        newSr: this.state.newSr,
        map: this.state.map,
        heroes: this.state.heroes,
        playedAt : (new Date()).toISOString()
      });
      remote.getCurrentWindow().hide();
    }
  }

  invalidFieldMessage(field){
    if(this.state.errors[field] && this.state.errors[field].message){
      return <div className="text-danger">{this.state.errors[field].message}</div>
    }
    return null
  }

  render() {
    const ingameHeroes = heroes.filter(e => e.type !== "Aggregate");
    const ingameMaps   = maps.filter(e =>   e.type !== "Aggregate");
    return (
      <div className="container-fluid" style={{marginTop: 10}}>
        <form onSubmit={(e) => this.submit(e)}>
          <h4 style={{marginBottom: 20}}>Enter your Competetive Match Results</h4>
          <div className="form-group row">
            <label className="col-4">New SR</label>
            <div className="input-group col-8">
              <div className="input-group-prepend">
                <div className="input-group-text" style={{maxWidth: 45}} ><Rank rank={this.state.newSr} hideText /></div>
              </div>
              <input
                type="number"
                className={`form-control ${this.state.errors.newSr ? "is-invalid" : ""}`}
                value={this.state.newSr}
                onChange={(event) => this.setState({newSr: parseInt(event.target.value, 10)|| 0})}
              />
              {this.invalidFieldMessage("newSr")}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4">Map</label>
            <div className="col-8">
              <Combobox
                containerClassName={this.state.errors.heroes ? "is-invalid" : ""}
                data={ingameMaps}
                value={this.state.map}
                onChange={(value) => this.setState({map: value})}
                textField='name'
                caseSensitive={false}
                groupBy='type'
                filter='startsWith'
              />
              {this.invalidFieldMessage("map")}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4">Heroes Played</label>
            <div className="col-8">
              <Multiselect
                containerClassName={this.state.errors.heroes ? "is-invalid" : ""}
                data={ingameHeroes}
                value={this.state.heroes}
                onChange={(value) => this.setState({heroes: value})}
                textField='name'
                caseSensitive={false}
                groupBy='type'
                filter='startsWith'
              />
              {this.invalidFieldMessage("heroes")}
            </div>
          </div>
          <div className="row text-center">
            <div className="col-4">
              <button type="submit" className="btn btn-primary col-12" onClick={(e) => this.submit(e)}>Submit Match</button>
            </div>
          </div>
          <div className="row text-center mt-3">
            <div className="col-4">
              <button type="submit" className="btn btn-light col-12" onClick={(e) => MatchEntry.abort(e)}>Abort</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
