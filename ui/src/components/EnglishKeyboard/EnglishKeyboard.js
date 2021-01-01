import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import {
    englishCharacterStartCode,
    englishCharactersLenght,
} from './constants';

const generateCharacters = (startCode, length) => {
    const characters = [];

    for( let index = 0; index < length; index++){
        characters.push(String.fromCharCode(startCode + index));
    }

    return characters;
}

const englishkeyboard = ({ onClick = () => { } }) => {
    const width = 12;
    const englishCharacters = generateCharacters(englishCharacterStartCode, englishCharactersLenght);

    return(
        <Grid container>
            <Grid
                item
                lg={width}
                md={width}
                sm={width}
                xl={width}
                xs={width}
            >
                <Paper>
                    {englishCharacters.map((character) => (
                        <Button key={character} onClick={() => onClick(character)}>{character}</Button>
                    ))}
                </Paper>
            </Grid>
        </Grid>
    );
};

export default englishkeyboard;