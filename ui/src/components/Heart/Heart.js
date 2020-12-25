import heart from '../../images/heart.gif';
import { makeStyles } from '@material-ui/core/styles'

const heartStyle = makeStyles({
    heart: {
        width: "100%",
        height: "auto",
    }
});

const Heart = (props) => {
    const classes = heartStyle(props);
    
    return (
        <img className={classes.heart} src={heart} alt='*'/>
    );
};

export default Heart;