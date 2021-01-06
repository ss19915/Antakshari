import { connect } from 'react-redux';
import Team from './Team';

const TeamContext = (props) => { 
    const {
        teamID = 'team1',
        game = {},
        ...otherProps
    } = props;

    const gameDetails= game[teamID];
    const activeTeam = game.activeTeam;

    let active = gameDetails.status;
    if(activeTeam === teamID){
        active = 1;
    }

    return(
        <Team
            active={active}
            teamID={teamID}
            {...gameDetails}
            {...otherProps}
        />
    );
};

const mapStateToProps = ({game}) => ({
    game,
});

export default connect(mapStateToProps)(TeamContext);