import ActiveCharacter from './ActiveCharacter';


const ActiveCharacterLogic = (props) => {
    const {
        updateActiveTeam,
        activeTeamIndex,
        ...otherProps
    } = props;

    const guessedCorrectly = () => {
        updateActiveTeam( activeTeamIndex );
    };

    
    return (
        <ActiveCharacter
            onClick={() => guessedCorrectly()}
            {...otherProps}
        />
    );
};

export default ActiveCharacterLogic;