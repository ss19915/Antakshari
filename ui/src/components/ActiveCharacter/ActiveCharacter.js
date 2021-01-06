import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {  Attension } from '../HOC';

const styles = makeStyles({
    root: {
        color: 'black',
    }
});
const ActiveCharacter = ({character = 'क',  onClick, ...props}) => {
    const classes = styles(props);

    return(
        <Attension onClick={onClick} width='15%' color='#fff' border='none' innerColor='#fff' >
            <Typography className={classes.root} variant='h1'>{character}</Typography>
        </Attension>
    );
};

export default ActiveCharacter;