import React from 'react';
import PropTypes from 'prop-types';

const Drum = ({title, sound, play}) => {
    // const {title, sound, play} = this.props;
    const soundSrc = require(`../assets/sounds/${sound}.wav`);
    return (
        <div className={play ? "drum play" : "drum"}>
            <div className="drum-title">{title}</div>
            {sound ?
                <div className="drum-subtitle">{sound}</div>:
                ""
            }
            {play ?
                <audio autoPlay src={`${soundSrc}`}></audio> : ""
            }
        </div>
    )
}

export default Drum;

Drum.propTypes = {
    title : PropTypes.string.isRequired,
    sound : PropTypes.string,
    play : PropTypes.bool
}



