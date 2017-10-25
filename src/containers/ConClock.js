import { connect } from 'react-redux';
import { asyncStart } from '../actions/actionCreators';
import Clock from '../components/Clock';

const mapStateToProps = (state) => ({
    time: state.time
});

const mapDispatchToProps = (dispatch) => ({
    func: () => dispatch(asyncStart())
});

const ConClock = connect( mapStateToProps, mapDispatchToProps )(Clock);

export default ConClock;