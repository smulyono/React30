import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minute : 0,
            hour : 0,
            seconds : 0
        }
    }

    componentDidMount() {
        setInterval(this.updateTime, 1000);
        this.updateTime();
    }

    updateTime = () => {
        const currentTime = new Date();
        const hour = Math.round((currentTime.getHours() / 24)  * 360);
        const minute = Math.round((currentTime.getMinutes() / 60) * 360);
        const seconds = Math.round((currentTime.getSeconds() / 60) * 360);
        this.setState({
            hour,
            minute,
            seconds
        });
    }

    render() {
        const {hour, minute , seconds} = this.state;
        return (
            <div class="center-page-container">
                <div class="clock-container">
                    <div class={`clock-hour degree-${hour}`}></div>
                    <div class={`clock-minutes degree-${minute}`}></div>
                    <div class={`clock-second degree-${seconds}`}></div>
                </div>
            </div>
        )
    }
}

export default Clock;
