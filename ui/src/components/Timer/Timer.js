import { Attension } from '../HOC';
import Grid from '@material-ui/core/grid';
import Typograph from '@material-ui/core/Typography';

const Timer = () => {
    const centerWidth = 6, sideWidth = 3;
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
                <Attension>Start</Attension>
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
                    <Typograph variant='h1'>00</Typograph>
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
                <Attension>Reset</Attension>
            </Grid>
        </Grid>
    );
};

export default Timer;