// @flow
import React, { Component } from 'react';
import { remote, ipcRenderer } from 'electron';
import Store from 'electron-store';
import NumberFormat from 'react-number-format';

import Multiselect from 'react-widgets/lib/Multiselect';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

import Rank from './Rank';
import { heroes } from '../store/staticData';


const store = new Store();

Moment.locale('en');
momentLocalizer();

type Props = {};
type State = {startSr: number, favouriteHeroes: Array<{}>};


export default class Settings extends Component<Props> {
  props: Props;
  state: State;

  static close(e){
    e.preventDefault();
    remote.getCurrentWindow().hide();
  }

  constructor(props) {
    super(props);
    this.state = {
      startSr: store.get('startSr', 0),
      favouriteHeroes: store.get('favouriteHeroes', []),
    };
  }

  handleInputChange(value, name) {
    this.setState({ [name]: value });
    store.set(name, value);
    if(name === 'startSr') {ipcRenderer.send("startSrChanged", value)}
  }

  render() {
    const ingameHeroes = heroes.filter(e => e.type !== "Aggregate");
    return (
      <div className="container-fluid" style={{marginTop: 10}}>
        <form onSubmit={(e) => Settings.close(e)}>
          <h4 style={{marginBottom: 20}}>Settings</h4>
          <div className="form-group row">
            <span className="col-4">Starting SR</span>
            <div className="input-group col-8">
              <div className="input-group-prepend">
                <div className="input-group-text" style={{maxWidth: 45}} ><Rank rank={this.state.startSr} hideText /></div>
              </div>
              <NumberFormat
                autoFocus
                className="form-control"
                value={this.state.startSr}
                onValueChange={values => {
                  this.handleInputChange(parseInt(values.value, 10), "startSr")
                }}
                isNumericString
                suffix=" SR"
                isAllowed={values => values.value <= 5000 && values.value > 0}
              />
            </div>
          </div>
          <div className="form-group row">
            <span className="col-4">Favourite Heroes</span>
            <div className="col-8">
              <Multiselect
                data={ingameHeroes}
                value={this.state.favouriteHeroes}
                onChange={(value) => this.handleInputChange(value, "favouriteHeroes")}
                textField='name'
                caseSensitive={false}
                groupBy='type'
                filter='startsWith'
              />
            </div>
          </div>
          <div className="row text-center mt-3">
            <div className="col-4">
              <button type="submit" className="btn btn-light col-12" onClick={(e) => Settings.close(e)}>Close</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
