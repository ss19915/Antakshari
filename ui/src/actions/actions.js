import constants from '../constants';

const {
    StartTimer,
    PauseTimer,
    UpdateTimer,
    ResetTimer,
    UpdateCharacter,
} = constants;

export const startTimer = {
    type: StartTimer,
};

export const pauseTimer = {
    type: PauseTimer,
};

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