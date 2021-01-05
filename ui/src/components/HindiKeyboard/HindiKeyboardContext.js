import { connect } from 'react-redux';
import actions from '../../actions';
import HindiKeyboard from './HindiKeyboard';

const mapDispatchToProps = (dispatch) => ({
    onClick: (character) => dispatch(actions.updateCharacter(character)),
});

export default connect(null, mapDispatchToProps)(HindiKeyboard);