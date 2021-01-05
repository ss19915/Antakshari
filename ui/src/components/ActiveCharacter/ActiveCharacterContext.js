import ActiveCharacter from './ActiveCharacter';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ character: state.game.character });

export default connect(mapStateToProps)(ActiveCharacter);