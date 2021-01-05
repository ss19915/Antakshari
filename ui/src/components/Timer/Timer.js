import { Attension } from '../HOC';
import Grid from '@material-ui/core/grid';
import Typograph from '@material-ui/core/Typography';

const Timer = (props) => {
    const centerWidth = 6, sideWidth = 3;
    const {
        startTimer,
        pauseTimer,
        updateTimer,
        resetTimer,
        timer = {},
    } = props;

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
                <Attension >Start</Attension>
            </Grid>
            <Grid
                item
                lg={centerWidth}
                md={centerWidth}
                sm={centerWidth}
                xl={centerWidth}
                xs={centerWidth}
            >
                <Attension innerWidth='40%'>
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