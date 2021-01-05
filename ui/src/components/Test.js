import Grid from '@material-ui/core/Grid'
import Team from './Home';

const Test = () => {
    let width = 12;
    
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
                <Team />
            </Grid>
        </Grid>
    );
};

export default Test;