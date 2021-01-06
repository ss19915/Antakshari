import ActiveCharacter from './ActiveCharacter';


const ActiveCharacterLogic = (props) => {
    const {
        updateActiveTeam,
        activeTeamIndex,
        ...otherProps
    } = props;
    console.log(props)

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