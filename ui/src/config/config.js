import image from '../images/team1/p3.jpg';
import image1 from '../images/team1/p1.jpg';

export const timerPerTurn = 20;
export const TeamIDs = ['boomShakalaka', 'chaosMonkeys', 'theGlitch', 'whistlePodu'];
export const InitialTeam = 0;
export const MaxLife = 5;

export const teamDetails = {
    team1: {
        name: 'Team 1',
        images: [ image1, image ],
    },
    theGlitch: {
        name: 'The Glitch',
        images: [ image1, image ],
    },
    whistlePodu: {
        name: 'Whistle Podu',
        images: [ image1, image ],
    },
    chaosMonkeys: {
        name: 'Chaos Monkeys',
        images: [ image1, image ],
    },
    boomShakalaka: {
        name: 'Boom Shakalaka',
        images: [ image1, image ],
    }
};

export const InitialState = {
    timer: { time: timerPerTurn },
    game: {
        [TeamIDs[0]]: {
            points: 0,
            status: 0,
            availableLife: MaxLife,
            lastTurn: 0,
            secondLastTurn: 0,
        },
        [TeamIDs[1]]: {
            points: 0,
            status: 0,
            availableLife: MaxLife,
            lastTurn: 0,
            secondLastTurn: 0,
        },
        [TeamIDs[2]]: {
            points: 0,
            status: 0,
            availableLife: MaxLife,
            lastTurn: 0,
            secondLastTurn: 0,
        },
        [TeamIDs[3]]: {
            points: 0,
            status: 0,
            availableLife: MaxLife,
            lastTurn: 0,
            secondLastTurn: 0,
        },
        activeTeamIndex: InitialTeam,
    },
};

