import ActiveCharacter from './ActiveCharacterLogic';
import { connect } from 'react-redux';

import actions from '../../actions';

const mapStateToProps = ({game}) => ({ game });

const mapDispatchToProps = (dispatch) => ({
    updateActiveTeam: (game) => dispatch(actions.updateActiveTeam(game)),
});

export default connect( mapStateToProps, mapDispatchToProps )(ActiveCharacter);