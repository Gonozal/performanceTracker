// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Statistics from '../components/Statistics';



function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {}
  // return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
