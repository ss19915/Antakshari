import { connect } from 'react-redux';
import actions from '../../actions';
import EnglishKeyboard from './EnglishKeyboard';

const mapDispatchToProps = (dispatch) => ({
    onClick: (character) => dispatch(actions.updateCharacter(character)),
});

export default connect(null, mapDispatchToProps)(EnglishKeyboard);