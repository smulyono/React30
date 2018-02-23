import React from 'react';

class Clock extends React.Component {
    render() {
        return (
            <div class="center-page-container">
                <div class="clock-container">
                    <div class="clock-minutes degree-10"></div>
                    <div class="clock-hour degree-0"></div>
                </div>
            </div>
        )
    }
}

export default Clock;
