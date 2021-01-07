import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LifeCount from '../LifeCount';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { MaxLife, teamDetails } from '../../config';

const teamStyles = makeStyles({
    root: ({reverse}) => ( reverse ? {
        display: 'flex',
        flexDirection: 'column-reverse',
    } : null) ,
    profile: ({active}) => {
        let border = '5px solid white';

        if(active > 0 ){
            border = '5px solid green';
        }
        else if(active < 0){
            border = '5px solid red';
        }
        return({
            position: 'relative',
            borderRadius: '3%',
            border: border,
            overflow: 'hidden',
        });
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
    },
    abc: ({active}) => {
        let background = '';
        
        if (active < 0){
            background = 'rgba(255,0,0,.5)';
        }
        else if(active > 0){
            background = 'rgba(0,155,0,.2)';
        }

        return ({
            position: 'absolute',
            background: background,
            width: '100%',
            paddingBottom: '100%'
        });
    },
});


const PlayerImage = (props) => {
    const { image, width = 6 } = props;
    const clases = teamStyles(props);

    return(
        <Grid 
            item
            lg={width}
            md={width}
            sm={width}
            xl={width}
            xs={width}
        >
            <img alt='img' className={clases.media} src={image} />
        </Grid>
    );
};

const Team = (props) => {
    const {
        points = 0,
        maxLife = MaxLife,
        availableLife = MaxLife,
        teamID = 'team1',
    } = props;

    const team = teamDetails[teamID]
    const clases = teamStyles(props);

    return(
        <div className={clases.root}>
            <div className={clases.profile}>
                <div className={clases.abc}></div>
                <Typography className={clases.header} >{team.name}</Typography>
                <Typography className={clases.foreGround} variant='h6' >Points: {points}</Typography>
                <Grid container>
                    {team.images.map((image, index) => (
                            <PlayerImage key={`playerImage${index}`} clases={clases} image={image}/>
                    ))}
                </Grid>
            </div>
            <LifeCount  maxLife={maxLife} availableLife={availableLife} />
        </div>
    );
};

export default Team;