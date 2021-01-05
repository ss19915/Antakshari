import constants from '../constants';
import { timerPerTurn } from '../config';
const {
    StartTimer,
    PauseTimer,
    UpdateTimer,
    ResetTimer,
    Timer,
    UpdateCharacter,
} = constants;
const initialState = {
    timer: { time: timerPerTurn },
    game: {},
};

const reducer = ( state = initialState, action) => {
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
                game: { ...state.game, character: action.character},
                timer: { ...state.timer, time: timerPerTurn, active: Timer.active}
            });
            
        default: 
            return state;
    }
};

export default reducer;