// @flow
import React, { Component } from 'react';
import { remote, ipcRenderer } from 'electron';
import Store from 'electron-store';
import NumberFormat from 'react-number-format';

import Combobox from 'react-widgets/lib/Combobox';
import Multiselect from 'react-widgets/lib/Multiselect';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

import Rank from './Rank';
import { maps, heroes } from '../store/staticData';


const store = new Store();

Moment.locale('en');
momentLocalizer();

type Props = {
};

type State = {
  newSr: number,
  currentSr: number,
  map: {},
  heroes: [],
  errors: {},
  comment: string
};

const emptyMap =  { name: "", shortName: "", type: "" , valid: false};


export default class MatchEntry extends Component<Props> {
  props: Props;
  state: State;

  static abort(){
    remote.getCurrentWindow().hide();
  }

  constructor(props) {
    super(props);
    this.state = {
      newSr: store.get('currentSr'),
      currentSr: store.get('currentSr'),
      map: emptyMap,
      heroes: store.get('favouriteHeroes', []),
      errors: {},
      comment: ""
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
        comment: this.state.comment,
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

  won(){
    return this.state.newSr > this.state.currentSr
  }

  lost(){
    return this.state.newSr < this.state.currentSr
  }

  srChangeClassName(){
    if(this.won()){
      return "text-success"
    } if(this.lost()){
      return "text-danger"
    }
    return "text.muted"
  }

  render() {
    const ingameHeroes = heroes.filter(e => e.type !== "Aggregate");
    const ingameMaps   = maps.filter(e =>   e.type !== "Aggregate");
    return (
      <div className="container-fluid" style={{marginTop: 10}}>
        <form onSubmit={(e) => this.submit(e)}>
          <h4 style={{marginBottom: 20}}>Enter your Competetive Match Results</h4>
          <div className="form-group row">
            <span className="col-4">New SR</span>
            <div className="input-group col-8">
              <div className="input-group-prepend">
                <div className="input-group-text" style={{maxWidth: 45}} ><Rank rank={this.state.newSr} hideText /></div>
              </div>
              <NumberFormat
                autoFocus
                className={`form-control ${this.state.errors.newSr ? "is-invalid" : ""}`}
                value={this.state.newSr}
                onValueChange={values => {
                  this.setState({newSr: parseInt(values.value, 10)|| 0})
                }}
                isNumericString
                suffix=" SR"
                isAllowed={values => values.value <= 5000 && values.value > 0}
              />
              <div className="input-group-append">
                <span className={`input-group-text ${this.srChangeClassName()}`}>
                  ({
                    (this.lost() ? "" : "+") + (this.state.newSr - this.state.currentSr)
                  })
                </span>
              </div>
              {this.invalidFieldMessage("newSr")}
            </div>
          </div>
          <div className="form-group row">
            <span className="col-4">Map</span>
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
          <div className="form-group row">
            <label className="col-4">Comment</label>
            <div className="input-group col-8">
              <textarea
                className="form-control"
                rows="3"
                value={this.state.comment}
                onChange={(event) => this.setState({comment: event.target.value})}

              />
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
