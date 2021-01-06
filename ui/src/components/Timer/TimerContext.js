import Timer from './TimerLogic';
import actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = ({timer, game: { activeTeamIndex }}) => ({ timer, activeTeamIndex });
const mapDispatchToProps = (dispatch) => ({
    startTimer: () => dispatch(actions.startTimer),
    pauseTimer: () => dispatch(actions.pauseTimer),
    updateTimer: (time) => dispatch(actions.updateTimer(time)),
    resetTimer: () => dispatch(actions.resetTimer),
    updateActiveTeam: (activeTeamIndex) => dispatch(actions.updateActiveTeam(activeTeamIndex)),
});

export default connect( mapStateToProps, mapDispatchToProps )(Timer);