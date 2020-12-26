import Heart from './Heart';
import Grid from '@material-ui/core/grid';


const LifeCount = ({ maxLife = 0, availableLife = 0 }) => {
    let width = 2;

    return (
        <Grid container >
            {Array.from(Array(maxLife).keys()).map((_, i) => (
                <Grid
                    item
                    lg={width}
                    md={width}
                    sm={width}
                    xl={width}
                    xs={width}
                >
                    <Heart hidden={i >= availableLife} key={`LifeCount_${i}`}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default LifeCount;