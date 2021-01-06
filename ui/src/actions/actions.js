import constants from '../constants';
import { TeamIDs } from '../config';

const {
    StartTimer,
    PauseTimer,
    UpdateTimer,
    ResetTimer,
    UpdateCharacter,
    UpdateActiveTeam,
    IncrementTeamPoint,
    DecreaseLife,
} = constants;

export const startTimer = ({
    type: StartTimer,
});

export const pauseTimer = ({
    type: PauseTimer,
});

export const updateTimer = (time) => ({
    type: UpdateTimer,
    time,
});

export const resetTimer = {
    type: ResetTimer,
};

export const updateCharacter = (character) => ({
    type: UpdateCharacter,
    character,
});


const getNextTeamIndex = (currentIndex) => {

    if(currentIndex + 1 === TeamIDs.length){
        return 0;
    }

    return currentIndex + 1 ;
};

export const updateActiveTeam = (game) => {
    const currentIndex = game.activeTeamIndex;
    let nextIndex = currentIndex;

    for( let i = 0; i< TeamIDs.length; i++){
        nextIndex = getNextTeamIndex(nextIndex);
        const status = game[TeamIDs[nextIndex]].status;

        if( status > -1 ){
            break;
        }
    }

    return({
        type: UpdateActiveTeam,
        teamIndex: nextIndex,
    });
};

export const incrementTeamPoint =({
    type: IncrementTeamPoint,
});

export const decreaseLife = ({
    type: DecreaseLife,
});