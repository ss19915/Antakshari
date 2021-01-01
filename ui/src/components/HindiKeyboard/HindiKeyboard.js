import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import {
    hindiCharacterStartCode,
    hindiVowelCharactersLenght,
    hindiLetterCharactersLength,
} from './constants';

const generateCharacters = (startCode, length) => {
    const characters = [];

    for( let index = 0; index < length; index++){
        characters.push(String.fromCharCode(startCode + index));
    }

    return characters;
}

const Hindikeyboard = ({ onClick = () => { } }) => {
    const width = 12;
    const hindiVowelCharacters = generateCharacters(hindiCharacterStartCode, hindiVowelCharactersLenght);
    const hindiLetterCharacters = generateCharacters(hindiCharacterStartCode + hindiVowelCharactersLenght, hindiLetterCharactersLength);

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
                    {hindiVowelCharacters.map((vowel) => (
                        <Button key={vowel} onClick={() => onClick(vowel)}>{vowel}</Button>
                    ))}
                </Paper>
            </Grid>
            <Grid
                item
                lg={width}
                md={width}
                sm={width}
                xl={width}
                xs={width}
            >
                <Paper>
                    {hindiLetterCharacters.map((letter) => (
                        <Button key={letter} onClick={() => onClick(letter)}>{letter}</Button>
                    ))}
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Hindikeyboard;