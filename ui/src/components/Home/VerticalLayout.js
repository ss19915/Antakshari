import { makeStyles } from '@material-ui/core/styles';

const LayoutStyle = makeStyles({
    root:{},
    top: {
        height: '30vh',
    },
    mid: {
        height: '40vh',
    },
    bottom: {
        display: 'flex',
        height: '30vh',
        alignItems: 'flex-end',
    },
});

const VerticalLayout = (props) => {
    const { Top, Mid, Bottom } = props;
    const classes = LayoutStyle(props);

    return (
        <div className={classes.root}>
            <div className={classes.top}>{Top}</div>
            <div className={classes.mid}>{Mid}</div>
            <div className={classes.bottom}>{Bottom}</div>
        </div>
    );
};

export default VerticalLayout;