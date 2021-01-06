import ActiveCharacter from './ActiveCharacterLogic';
import { connect } from 'react-redux';

import actions from '../../actions';

const mapStateToProps = ({game: { character, activeTeamIndex}}) => ({ character, activeTeamIndex });

const mapDispatchToProps = (dispatch) => ({
    updateActiveTeam: (activeTeamIndex) => dispatch(actions.updateActiveTeam(activeTeamIndex)),
});

export default connect( mapStateToProps, mapDispatchToProps )(ActiveCharacter);