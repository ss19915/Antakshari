export const timerPerTurn = 20;
export const TeamIDs = ['boomShakalaka', 'chaosMonkeys', 'theGlitch', 'whistlePodu'];
export const InitialTeam = 0;
export const MaxLife = 5;
export const InitialState = {
    timer: { time: timerPerTurn },
    game: {
        [TeamIDs[0]]: {
            points: 0,
            status: 0,
            availableLife: MaxLife,
        },
        [TeamIDs[1]]: {
            points: 0,
            status: 0,
            availableLife: MaxLife,
        },
        [TeamIDs[2]]: {
            points: 0,
            status: 0,
            availableLife: MaxLife,
        },
        [TeamIDs[3]]: {
            points: 0,
            status: 0,
            availableLife: MaxLife,
        },
        activeTeamIndex: InitialTeam,
    },
};

