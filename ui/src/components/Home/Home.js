import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import VerticalLayout from './VerticalLayout';
import Team from '../Team';
import HindiKeyboard from '../HindiKeyboard';
import EnglishKeyboard from '../EnglishKeyboard';
import Timer from '../Timer';
import ActiveCharacter from '../ActiveCharacter';

const LefiSide = ({sideWidth, ...otherProps}) => (
    <Grid
        item
        lg={sideWidth}
        md={sideWidth}
        sm={sideWidth}
        xl={sideWidth}
        xs={sideWidth}
    >
        <VerticalLayout {...otherProps} />
    </Grid>
);

const MainSide = ({ mainWidth, ...otherProps}) => (
    <Grid
        item
        lg={mainWidth}
        md={mainWidth}
        sm={mainWidth}
        xl={mainWidth}
        xs={mainWidth}
    >
        <Grid
            container
            justify='center'
        >
            <VerticalLayout {...otherProps} />
        </Grid>
    </Grid>
);

const RightSide = ({ sideWidth, ...otherProps }) => (
    <Grid
        item
        lg={sideWidth}
        md={sideWidth}
        sm={sideWidth}
        xl={sideWidth}
        xs={sideWidth}
    >
        <Grid
            container
            justify='flex-end'
        >
            <VerticalLayout {...otherProps} />
        </Grid>
    </Grid>
);



const styles = makeStyles({
    timer: {
        padding: '0 12% 0 12%',
    },
    hindiKeyboard: {
        padding: '.5em .5em 0 .5em',
    },
    top: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    englishKeyboard: {
        padding: '0 .5em .5em .5em',
    }
});

const Home = (props) => {
    const sideWidth = 2;
    const mainWidth = 12 - 2*sideWidth;
    const classes = styles(props);

    return (
        <Grid container>
            <LefiSide
                sideWidth={sideWidth}
                Top={ 
                    <Team
                        teamID='theGlitch'
                        points={9}
                        availableLife={2}
                        active={1}
                    />
                }
                Mid=''
                Bottom={
                    <Team
                        teamID='whistlePodu'
                        points={7}
                        availableLife={2}
                        reverse
                    />
                }
            />

            <MainSide
                mainWidth={mainWidth}
                Top={
                    <div className={classes.top}>
                        <div className={classes.englishKeyboard}><EnglishKeyboard/></div>
                        <ActiveCharacter/>
                    </div>
                }
                Mid={
                    <div className={classes.timer}>
                        <Timer/>
                    </div>
                }
                Bottom={
                    <div className={classes.hindiKeyboard}>
                        <HindiKeyboard/>
                    </div>
                }
            />

            <RightSide
                sideWidth={sideWidth}
                Top={
                    <Team
                        teamID='boomShakalaka'
                        points={5}
                        availableLife={3}
                        active={-1}
                    />
                }
                Mid=''
                Bottom={
                    <Team
                        teamID='chaosMonkeys'
                        points={8}
                        availableLife={2}
                        reverse
                    /> 
                }
            />
        </Grid>
    );
};

export default Home;