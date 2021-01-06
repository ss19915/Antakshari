import ActiveCharacter from './ActiveCharacter';


const ActiveCharacterLogic = (props) => {
    const {
        updateActiveTeam,
        game,
        ...otherProps
    } = props;
    const character = game.character;
    const guessedCorrectly = () => {
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