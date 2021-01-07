import Grid from '@material-ui/core/grid';
import { makeStyles } from '@material-ui/core/styles';
import { Attension } from '../HOC';
import Typograph from '@material-ui/core/Typography';
import zippedMouth from '../../images/zippedMouth.jpg';

const styles = makeStyles({
    reject: {
        display: 'flex',
        overflow: 'hidden',
        borderRadius: '50%',
    },
    image: {
        height: '98px',
    },
});

const Timer = (props) => {
    const centerWidth = 6, sideWidth = 3;
    const {
        startTimer,
        pauseTimer,
        resetTimer,
        timer = {},
        failedToSing,
    } = props;

    const classes = styles(props);

    return (
        <Grid container>
            <Grid 
                item
                lg={sideWidth}
                md={sideWidth}
                sm={sideWidth}
                xl={sideWidth}
                xs={sideWidth}
            >
                <Attension onClick={failedToSing}><div className={classes.reject} ><img className={classes.image} alt='x' src={zippedMouth}/></div></Attension>
            </Grid>
            <Grid
                item
                lg={centerWidth}
                md={centerWidth}
                sm={centerWidth}
                xl={centerWidth}
                xs={centerWidth}
            >
                <Attension >
                    <Typograph onClick={() => { timer.active ? pauseTimer() : startTimer()}} variant='h1'>{timer.time}</Typograph>
                </Attension>
            </Grid>
            <Grid
                item
                lg={sideWidth}
                md={sideWidth}
                sm={sideWidth}
                xl={sideWidth}
                xs={sideWidth}
            >
                <Attension onClick={resetTimer}>Reset</Attension>
            </Grid>
        </Grid>
    );
};

export default Timer;