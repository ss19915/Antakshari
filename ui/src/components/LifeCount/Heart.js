import heart from '../../images/heart.gif';
import { makeStyles } from '@material-ui/core/styles';
import ParticleEffect from 'react-particle-effect-button';

const heartStyle = makeStyles({
    heart: {
        width: "100%",
        height: "auto",
    }
});

const Heart = (props) => {
    const classes = heartStyle(props);
    const { hidden } = props;

    return (
        <ParticleEffect hidden={hidden} color='red'>
            <img className={classes.heart} src={heart} alt='*'/>
        </ParticleEffect>
    );
};

export default Heart;