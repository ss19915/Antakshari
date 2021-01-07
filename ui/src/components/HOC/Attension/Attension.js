import { makeStyles } from '@material-ui/core/styles'
import { darken } from '@material-ui/core/styles/colorManipulator';

const AttensionStyle = makeStyles((theme) => {
    const defaultValues = {
        color: theme.palette.primary.main,
        innerColor: theme.palette.secondary.main,
        width: '100%',
        innerWidth: '50%',
        borderRadius: '50%',
        innerBorder: '5px solid white'
    };
    return ({
        circle: ({
            width = defaultValues.width,
            color = defaultValues.color,
            innerColor = defaultValues.innerColor,
            innerWidth = defaultValues.innerWidth,
            borderRadius = defaultValues.borderRadius,
            
        }) => ({
            position: 'relative',
            width: width,
            paddingTop: width,
            background: `radial-gradient(${innerColor} ${innerWidth}, ${color})`,
            borderRadius: borderRadius,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }),
        count: ({ 
                innerWidth: width = defaultValues.innerWidth,
                innerColor: color = defaultValues.innerColor,
                borderRadius = defaultValues.borderRadius,
                border = defaultValues.innerBorder,
            })=>({
            position: 'absolute',
            marginTop: '-50%',
            width: width,
            paddingTop: width,
            backgroundColor: color,
            borderRadius: borderRadius,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: border,
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: darken(color, 0.2),
            },
        }),
        
        innerCircle: {
            position: 'absolute',
            marginTop: '-50%',
            display: 'flex',
        },
    })
});

const Attension = (props) => {
    const { children = null, onClick = () => {} } = props;
    let clases = AttensionStyle(props);

    return (
        <div className={clases.circle}>
            <div className={clases.count}>
                <div onClick={(event) => onClick(event)} className={clases.innerCircle}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Attension;