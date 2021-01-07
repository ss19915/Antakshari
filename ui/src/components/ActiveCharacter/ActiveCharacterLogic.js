import ActiveCharacter from './ActiveCharacter';


const ActiveCharacterLogic = (props) => {
    const {
        updateActiveTeam,
        updateLastTurn,
        game,
        ...otherProps
    } = props;
    const character = game.character;
    const guessedCorrectly = () => {
        updateLastTurn(0);
        updateActiveTeam(game);
    };

    
    return (
        <ActiveCharacter
            onClick={() => guessedCorrectly()}
            character={character}
            {...otherProps}
        />
    );
};

export default ActiveCharacterLogic;