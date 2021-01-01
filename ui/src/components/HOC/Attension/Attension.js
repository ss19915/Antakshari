import { makeStyles } from '@material-ui/core/styles'

const AttensionStyle = makeStyles((theme) => {
    const defaultValues = {
        color: theme.palette.primary.main,
        innerColor: theme.palette.secondary.main,
        width: '100%',
        innerWidth: '30%',
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
                innerWidth = defaultValues.innerWidth,
                innerColor = defaultValues.innerColor,
                borderRadius = defaultValues.borderRadius,
                innerBorder = defaultValues.innerBorder,
            })=>({
            position: 'absolute',
            marginTop: '-50%',
            width: innerWidth,
            paddingTop: innerWidth,
            backgroundColor: innerColor,
            borderRadius: borderRadius,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: innerBorder,
        }),
        innerCircle: {
            position: 'absolute',
            marginTop: '-50%',
            display: 'flex',
        },
    })
});

const Attension = (props) => {
    const { children = null } = props;
    let clases = AttensionStyle(props);

    return (
        <div className={clases.circle}>
            <div className={clases.count}>
                <div className={clases.innerCircle}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Attension;