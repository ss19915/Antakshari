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

export const updateActiveTeam = (activeTeamIndex) => ({
    type: UpdateActiveTeam,
    teamIndex: getNextTeamIndex(activeTeamIndex),
});

export const incrementTeamPoint =({
    type: IncrementTeamPoint,
});