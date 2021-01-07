import { connect } from 'react-redux';
import Team from './Team';
import { TeamIDs } from '../../config';

const TeamContext = (props) => { 
    const {
        teamID = 'team1',
        game = {},
        ...otherProps
    } = props;

    const gameDetails= game[teamID];
    const activeTeamIndex = game.activeTeamIndex;

    let active = gameDetails.status;
    if(TeamIDs[activeTeamIndex] === teamID){
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