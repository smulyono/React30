import React from 'react';
import ReactDOM from 'react-dom';
import Drum from './components/Drum';
import "./assets/styles/index.less";

// /* Start of javascript */
class Drumkit extends React.Component {
    constructor(props) { super(props); }
    state = {
        data : {
            "a" : {play : false, sound : "clap"},
            "s" : {play : false, sound : "hihat"},
            "d" : {play : false, sound : "kick"},
            "f" : {play : false, sound : "openhat"},
            "g" : {play : false, sound : "ride"},
            "h" : {play : false, sound : "snare"},
            "j" : {play : false, sound : "boom"},
            "k" : {play : false, sound : "tom"},
            "l" : {play : false, sound : "tink"}
        }
    }

    captureKey = (e) => {
        console.log(e.key, e.keyCode);
        const letter = e.key.toLowerCase();
        this.setLetterState(letter, true);
    }

    releaseKey = (e) => {
        const letter = e.key.toLowerCase();
        this.setLetterState(letter, false);
    }

    setLetterState = (letter, letterState) => {
        let {data} = this.state;
        if (data.hasOwnProperty(letter)) {
            data[letter].play = letterState;
        }
        this.setState(data);
    }

    componentDidMount() {
        document.body.addEventListener("keydown", this.captureKey);
        document.body.addEventListener("keyup", this.releaseKey);
    }

    componentWillUnmount() {
        document.body.removeEventListener("keydown");
        document.body.removeEventListener("keyup");
    }

    render() {
        const {data} = this.state;
        const disp = [];
        for (let key in data) {
            disp.push(<Drum key={key}
                            title={key.toUpperCase()}
                            sound={data[key].sound}
                            play={data[key].play}
                            />);
        }
        return (
            <div className="drumkit-container">
            {disp}
            </div>
        )
    }
}

ReactDOM.render(
    <Drumkit />,
    document.getElementById("root")
);

