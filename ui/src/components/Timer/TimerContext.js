import Timer from './TimerLogic';
import actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
    startTimer: () => dispatch(actions.startTimer),
    pauseTimer: () => dispatch(actions.pauseTimer),
    updateTimer: (time) => dispatch(actions.updateTimer(time)),
    resetTimer: () => dispatch(actions.resetTimer),
});

export default connect( mapStateToProps, mapDispatchToProps )(Timer);