import constants from '../constants';
import { timerPerTurn, InitialState, TeamIDs } from '../config';
import _ from 'lodash';

const {
    StartTimer,
    PauseTimer,
    UpdateTimer,
    ResetTimer,
    Timer,
    UpdateCharacter,
    UpdateActiveTeam,
    IncrementTeamPoint,
} = constants;

const reducer = ( state = InitialState, action) => {
    switch(action.type){
        case StartTimer:
            return({
                ...state,
                timer: { ...state.timer, active: Timer.active },
            });
        case PauseTimer:
            return({
                ...state,
                timer: { ...state.timer, active: Timer.paused },
            });
        case UpdateTimer:
            return({
                ...state,
                timer: { ...state.timer, time: action.time },
            });
        case ResetTimer:

            return({
                ...state,
                timer: { ...state.timer, time: timerPerTurn, active: Timer.paused },
            });
        case UpdateCharacter:
            return({
                ...state,
                game: { ..._.cloneDeep(state.game), character: action.character},
                timer: { ...state.timer, time: timerPerTurn, active: Timer.active}
            });
        case UpdateActiveTeam:
            return ({
                ...state,
                game: { ..._.cloneDeep(state.game), activeTeamIndex: action.teamIndex},
            });
        case IncrementTeamPoint: {
            const updatedGame = _.cloneDeep(state.game);
            const activeTeamIndex = updatedGame.activeTeamIndex;
            const activeTeamID = TeamIDs[activeTeamIndex];

            TeamIDs.map((teamID) => {
                const status = updatedGame[teamID].status;

                if(teamID !== activeTeamID && status > -1){
                    updatedGame[teamID].points += 1;
                }
            });

            return ({
                ...state,
                game: updatedGame,
            });
        }
        default: 
            return state;
    }
};

export default reducer;