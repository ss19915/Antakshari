
import image from '../../images/team1/p3.jpg';
import image1 from '../../images/team1/p1.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LifeCount from '../LifeCount';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const teamStyles = makeStyles({
    root: {
        position: 'relative',
        borderRadius: '3%',
        overflow: 'hidden'
    },
    foreGround: {
        position: 'absolute',
        background: 'linear-gradient(0.25turn, rgba(25,25,25,1), rgba(0,0,0,0))',
        width: '100%',
        marginTop: -1,
        display: 'flex',
    },
    media: {
        width: '100%',
        display: 'flex',
        height: '20vh',
        objectFit: 'cover',
    },
    header:{
        display: 'flex',
        background: 'linear-gradient(127deg, rgba(0,155,100,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',
        width: '100%'
    }
});

const Team = (props) => {
    const {
        teamName = 'Team 1',
        points = 0,
        maxLife = 5,
        availableLife = 5,
    } = props;

    const clases = teamStyles(props);
    let width = 6;

    return(
        <React.Fragment>
        <div className={clases.root}>
        <Typography className={clases.header} >{teamName}</Typography>
        <Typography className={clases.foreGround} variant='h6' >Points: {points}</Typography>
                <Grid container>
                    <Grid 
                        item
                        lg={width}
                        md={width}
                        sm={width}
                        xl={width}
                        xs={width}
                    >
                        <img className={clases.media} src={image}  />
                    </Grid>
                    <Grid
                        item
                        lg={width}
                        md={width}
                        sm={width}
                        xl={width}
                        xs={width}
                    >
                        <img className={clases.media} src={image1} />
                    </Grid>
                </Grid>
            </div>
        <LifeCount  maxLife={maxLife} availableLife={availableLife} />
        </React.Fragment>
    );
};

export default Team;