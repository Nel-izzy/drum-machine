import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      power: true,
      input: "",
      volume: 1.0,
      Q: false,
      W: false,
      E: false,
      A: false,
      S: false,
      D: false,
      Z: false,
      X: false,
      C: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.togglePower = this.togglePower.bind(this);
    //this.handleSlide = this.handleSlide.bind(this);

    this.drumKey = {
      Q: "Cymbal",
      W: "Noiz",
      E: "Mbrute",
      A: "Kk01",
      S: "Bongo2",
      D: "Claves",
      Z: "Conga",
      X: "Handclap",
      C: "Cowbell",
    };
  }

  handleMouseDown(key) {
    if (this.state.power) {
      this.setState({
        input: this.drumKey[key],
        [key]: true,
      });
      document.getElementById(key).volume = this.state.volume;
      document.getElementById(key).pause();
      document.getElementById(key).currentTime = 0;
      document.getElementById(key).play();
    } else {
      this.setState({
        input: "Power is off",
      });
    }
  }

  handleMouseUp(event) {
    this.setState({
      Q: false,
      W: false,
      E: false,
      A: false,
      S: false,
      D: false,
      Z: false,
      X: false,
      C: false,
    });
  }

  handleKeyPress(event) {
    if (this.state.power) {
      const keyTest = /[QWEASDZXC]/.test(event.key);
      if (keyTest) {
        this.setState({
          input: this.drumKey[event.key],
          [event.key]: true,
        });
        document.getElementById(event.key).pause();
        document.getElementById(event.key).currentTime = 0;
        document.getElementById(event.key).play();
      } else {
      }
    } else {
    }
  }

  togglePower() {
    this.setState({
      power: !this.state.power,
      input: this.state.power ? "Power is off" : "Power is on",
    });
  }

  // handleSlide(event) {
  //   this.setState({
  //     volume: event.target.value / 10
  //   });
  // }

  handleKeyUp(event) {
    this.setState({
      Q: false,
      W: false,
      E: false,
      A: false,
      S: false,
      D: false,
      Z: false,
      X: false,
      C: false,
    });
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyUp);
  }
  unsafe_componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  render() {
    return (
      <div id="drum-machine">
        <div className="header">
          <button
            type="button"
            className="power-btn"
            onClick={this.togglePower}
            style={
              this.state.power
                ? { backgroundColor: "#2ec4b6" }
                : { backgroundColor: "#ff3366" }
            }
          >
            {this.state.power ? "ON" : "OFF"}
          </button>
          <div className="display" id="display">
            {this.state.input}
          </div>
        </div>
        <div class="drum-pad-container">
          <div
            className={"drum-pad active-" + this.state.Q}
            id="dp-Q"
            onMouseDown={() => this.handleMouseDown("Q")}
            onMouseUp={this.handleMouseUp}
          >
            <audio
              className="clip"
              id="Q"
              preload="auto"
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/234[kb]606-cymbal1.wav.mp3"
            ></audio>
            Q
          </div>

          <div
            className={"drum-pad active-" + this.state.W}
            id="dp-W"
            onMouseDown={() => this.handleMouseDown("W")}
            onMouseUp={this.handleMouseUp}
          >
            <audio
              className="clip"
              id="W"
              preload="auto"
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Arturia%20MiniBrute/275[kb]mbrute_noiz0016.wav.mp3"
            ></audio>
            W
          </div>
          <div
            className={"drum-pad active-" + this.state.E}
            id="dp-E"
            onMouseDown={() => this.handleMouseDown("E")}
            onMouseUp={this.handleMouseUp}
          >
            <audio
              className="clip"
              id="E"
              preload="auto"
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Arturia%20MiniBrute/290[kb]mbrute_noiz0010.wav.mp3"
            ></audio>
            E
          </div>
          <div
            className={"drum-pad active-" + this.state.A}
            id="dp-A"
            onMouseDown={() => this.handleMouseDown("A")}
            onMouseUp={this.handleMouseUp}
          >
            <audio
              className="clip"
              id="A"
              preload="auto"
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Arturia%20MiniBrute/261[kb]mbrute_kk01.wav.mp3"
            ></audio>
            A
          </div>
          <div
            className={"drum-pad active-" + this.state.S}
            id="dp-S"
            onMouseDown={() => this.handleMouseDown("S")}
            onMouseUp={this.handleMouseUp}
          >
            <audio
              className="clip"
              id="S"
              preload="auto"
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/18[kb]linn-BONGO2.aif.mp3"
            ></audio>
            S
          </div>
          <div
            className={"drum-pad active-" + this.state.D}
            id="dp-D"
            onMouseDown={() => this.handleMouseDown("D")}
            onMouseUp={this.handleMouseUp}
          >
            <audio
              className="clip"
              id="D"
              preload="auto"
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Korg%20ER-1/12[kb]er1-claves.wav.mp3"
            ></audio>
            D
          </div>
          <div
            className={"drum-pad active-" + this.state.Z}
            id="dp-Z"
            onMouseDown={() => this.handleMouseDown("Z")}
            onMouseUp={this.handleMouseUp}
          >
            <audio
              className="clip"
              id="Z"
              preload="auto"
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/15[kb]hi_conga.aif.mp3"
            ></audio>
            Z
          </div>
          <div
            className={"drum-pad active-" + this.state.X}
            id="dp-X"
            onMouseDown={() => this.handleMouseDown("X")}
            onMouseUp={this.handleMouseUp}
          >
            <audio
              className="clip"
              id="X"
              preload="auto"
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/31[kb]handclap.aif.mp3"
            ></audio>
            X
          </div>
          <div
            className={"drum-pad active-" + this.state.C}
            id="dp-C"
            onMouseDown={() => this.handleMouseDown("C")}
            onMouseUp={this.handleMouseUp}
          >
            <audio
              className="clip"
              id="C"
              preload="auto"
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/29[kb]cowbell.aif.mp3"
            ></audio>
            C
          </div>
        </div>
      </div>
    );
  }
}

export default App;
