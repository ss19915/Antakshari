import constants from '../constants';
import { timerPerTurn, InitialState } from '../config';
import _ from 'lodash';

const {
    StartTimer,
    PauseTimer,
    UpdateTimer,
    ResetTimer,
    Timer,
    UpdateCharacter,
    UpdateActiveTeam,
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
            
        default: 
            return state;
    }
};

export default reducer;