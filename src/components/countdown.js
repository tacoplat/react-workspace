import React, { Component } from 'react';
import moment from 'moment';

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: "Calculating..."
        };
    }

    calculateDifference() {
        var nowDate = new Date();
        var eventDate = new Date(this.props.eventDate);
        var timeDiff = Math.round(moment.duration(eventDate.getTime() - nowDate.getTime()).asDays()) + " day(s)";
        
        this.setState({
            timeLeft: timeDiff
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.calculateDifference(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render()
    {
        return(
        <div className='countdown noselect'>
            <h2>Days until <span class='eventName'>{this.props.eventName}</span></h2>
            <span>{this.state.timeLeft}</span>
        </div>
        );
    }
}
export default Countdown;