import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MatchEntry from '../components/MatchEntry';
import * as MatchEntryActions from '../actions/matchEntry';



function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MatchEntryActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchEntry);
