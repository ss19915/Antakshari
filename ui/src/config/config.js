export const timerPerTurn = 20;
export const TeamIDs = ['boomShakalaka', 'chaosMonkeys', 'theGlitch', 'whistlePodu'];
export const InitialTeam = TeamIDs[0];
export const MaxLife = 5;
export const InitialState = {
    timer: { time: timerPerTurn },
    game: {
        [TeamIDs[0]]: {
            points: 0,
        },
        [TeamIDs[1]]: {
            points: 0,
        },
        [TeamIDs[2]]: {
            points: 0,
        },
        [TeamIDs[3]]: {
            points: 0,
        },
        activeTeam: InitialTeam,
    },
};

