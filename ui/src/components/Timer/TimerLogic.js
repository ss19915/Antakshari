import React from 'react';
import Timer from './Timer';
class TimerLogic extends React.Component {
    constructor(props){
        super(props);
        this.isTimerActive = false;
        this.timerLastUpdateTime = null;
    }

    startTimer = () => {
        setTimeout( () => {
            const { timer, updateTimer, pauseTimer } = this.props;
            const { time } = timer;
            let lastUpdatedDuration = new Date() - this.timerLastUpdateTime;

            if(this.isTimerActive && time > 0 && lastUpdatedDuration > 1000){
                this.timerLastUpdateTime = new Date();
                updateTimer( time - 1);
                this.startTimer();
            }
            
            if(time < 1 && timer.active){
                pauseTimer();
            }

        }, 1000);
    }

    failedToSing = () =>  {
        const { activeTeamIndex, updateActiveTeam, incrementTeamPoint } = this.props;
        
        incrementTeamPoint();
        updateActiveTeam(activeTeamIndex)
    }

    render() {
        const {
            timer,
        } = this.props;

        this.timer = timer;
        if(timer.active && !this.isTimerActive){
            this.isTimerActive = true;
            this.startTimer();
        }
        else if ( !timer.active && this.isTimerActive ){
            this.isTimerActive =  false;
        }

        return (
            <Timer {...this.props} failedToSing={this.failedToSing} />
        );
    }
}

export default TimerLogic;