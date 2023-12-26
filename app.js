import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {power: true, display: "", bank: true, volume: 50};
    this.togglePower = this.togglePower.bind(this);
    this.toggleBank = this.toggleBank.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
    this.pad1 = React.createRef();
    this.pad2 = React.createRef();
    this.pad3 = React.createRef();
    this.pad4 = React.createRef();
    this.pad5 = React.createRef();
    this.pad6 = React.createRef();
    this.pad7 = React.createRef();
    this.pad8 = React.createRef();
    this.pad9 = React.createRef();
    this.button1 = React.createRef();
    this.button2 = React.createRef();
    this.button3 = React.createRef();
    this.button4 = React.createRef();
    this.button5 = React.createRef();
    this.button6 = React.createRef();
    this.button7 = React.createRef();
    this.button8 = React.createRef();
    this.button9 = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.executeEvent = this.executeEvent.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousedown', this.handleClick);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyUp);
    document.removeEventListener('mouseup', this.handleMouseUp);
    document.removeEventListener('mousedown', this.handleClick);
  }
  
  togglePower() {
    this.setState((state) => ({power: !state.power, display: ""}));
  }
  
  toggleBank() {
    this.setState((state) => ({bank: !state.bank, display: state.bank ? "Heater Kit" : "Smooth Piano Kit"}));
  }
  
  adjustVolume(event) {
    this.setState({volume: event.target.value, display: "Volume " + event.target.value});
  }
  
  handleClick(event) {
    if(this.state.power)
      {
        this.executeEvent(event.target.id);
      }
    else
      {
        switch(event.target.id)
        {
          case 'Heater1': case 'Chord1': this.button1.current.focus();
                   break;
          case 'Heater2': case 'Chord2': this.button2.current.focus();
                   break;
          case 'Heater3': case 'Chord3': this.button3.current.focus();
                   break;
          case 'Heater4': case 'Shaker': this.button4.current.focus();
                   break;
          case 'Clap': case 'Open_HH': this.button5.current.focus();
                   break;
          case 'OpenHH': case 'Closed_HH': this.button6.current.focus();
                   break;
          case 'KickNHat': case 'PunchyKick': this.button7.current.focus();
                   break;
          case 'Kick': case 'SideStick': this.button8.current.focus();
                   break;
          case 'ClosedHH': case 'Snare': this.button9.current.focus();
                   break;
        }
      }
  }
  
  handleKeyPress(event) {
    if(this.state.power) {
      switch(event.keyCode) {
        case 81: this.state.bank ? this.executeEvent('Chord1') : this.executeEvent('Heater1');
                 break;
        case 87: this.state.bank ? this.executeEvent('Chord2') : this.executeEvent('Heater2');
                 break;
        case 69: this.state.bank ? this.executeEvent('Chord3') : this.executeEvent('Heater3');
                 break;
        case 65: this.state.bank ? this.executeEvent('Shaker') : this.executeEvent('Heater4');
                 break;
        case 83: this.state.bank ? this.executeEvent('Open_HH') : this.executeEvent('Clap');
                 break;
        case 68: this.state.bank ? this.executeEvent('Closed_HH') : this.executeEvent('OpenHH');
                 break;
        case 90: this.state.bank ? this.executeEvent('PunchyKick') : this.executeEvent('KickNHat');
                 break;
        case 88: this.state.bank ? this.executeEvent('SideStick') : this.executeEvent('Kick');
                 break;
        case 67: this.state.bank ? this.executeEvent('Snare') : this.executeEvent('ClosedHH');
                 break;
      }
    }
    else 
    {
      switch(event.keyCode)
      {
        case 81: this.button1.current.focus();
                 break;
        case 87: this.button2.current.focus();
                 break;
        case 69: this.button3.current.focus();
                 break;
        case 65: this.button4.current.focus();
                 break;
        case 83: this.button5.current.focus();
                 break;
        case 68: this.button6.current.focus();
                 break;
        case 90: this.button7.current.focus();
                 break;
        case 88: this.button8.current.focus();
                 break;
        case 67: this.button9.current.focus();
                 break;
      }
    }
  }
  
  executeEvent(id) {
    switch(id) {
          case 'Heater1': this.button1.current.focus();
                          this.pad1.current.volume = this.state.volume / 100; 
                          this.pad1.current.play();
                          this.pad1.current.currentTime = null;
                          this.setState({display: 'Heater 1'});
                          break;
          case 'Heater2': this.button2.current.focus();
                          this.pad2.current.volume = this.state.volume / 100;
                          this.pad2.current.play();
                          this.pad2.current.currentTime = null;
                          this.setState({display: 'Heater 2'});
                          break;  
          case 'Heater3': this.button3.current.focus();
                          this.pad3.current.volume = this.state.volume / 100;
                          this.pad3.current.play();
                          this.pad3.current.currentTime = null;
                          this.setState({display: 'Heater 3'});
                          break;
          case 'Heater4': this.button4.current.focus();
                          this.pad4.current.volume = this.state.volume / 100;
                          this.pad4.current.play();
                          this.pad4.current.currentTime = null;
                          this.setState({display: 'Heater 4'});
                          break;
          case 'Clap': this.button5.current.focus();
                       this.pad5.current.volume = this.state.volume / 100;
                       this.pad5.current.play();
                       this.pad5.current.currentTime = null;
                       this.setState({display: 'Clap'});
                       break;
          case 'OpenHH': this.button6.current.focus();
                         this.pad6.current.volume = this.state.volume / 100;
                         this.pad6.current.play();
                         this.pad6.current.currentTime = null;
                         this.setState({display: 'Open HH'});
                         break;
          case 'KickNHat': this.button7.current.focus();
                           this.pad7.current.volume = this.state.volume / 100;
                           this.pad7.current.play();
                           this.pad7.current.currentTime = null;
                           this.setState({display: "Kick n' Hat"});
                           break;
          case 'Kick': this.button8.current.focus();
                       this.pad8.current.volume = this.state.volume / 100;
                       this.pad8.current.play();
                       this.pad8.current.currentTime = null;
                       this.setState({display: 'Kick'});
                       break;
          case 'ClosedHH': this.button9.current.focus();
                           this.pad9.current.volume = this.state.volume / 100;
                           this.pad9.current.play();
                           this.pad9.current.currentTime = null;
                           this.setState({display: 'Closed HH'});
                           break;
          case 'Chord1': this.button1.current.focus();
                         this.pad1.current.volume = this.state.volume / 100;
                         this.pad1.current.play();
                         this.pad1.current.currentTime = null;
                         this.setState({display: 'Chord 1'});
                         break;
          case 'Chord2': this.button2.current.focus();
                         this.pad2.current.volume = this.state.volume / 100;
                         this.pad2.current.play();
                         this.pad2.current.currentTime = null;
                         this.setState({display: 'Chord 2'});
                         break;  
          case 'Chord3': this.button3.current.focus();
                         this.pad3.current.volume = this.state.volume / 100;
                         this.pad3.current.play();
                         this.pad3.current.currentTime = null;
                         this.setState({display: 'Chord 3'});
                         break;
          case 'Shaker': this.button4.current.focus();
                         this.pad4.current.volume = this.state.volume / 100;
                         this.pad4.current.play();
                         this.pad4.current.currentTime = null;
                         this.setState({display: 'Shaker'});
                         break;
          case 'Open_HH': this.button5.current.focus();
                          this.pad5.current.volume = this.state.volume / 100;
                          this.pad5.current.play();
                          this.pad5.current.currentTime = null;
                          this.setState({display: 'Open HH'});
                          break;
          case 'Closed_HH': this.button6.current.focus();
                            this.pad6.current.volume = this.state.volume / 100;
                            this.pad6.current.play();
                            this.pad6.current.currentTime = null;
                            this.setState({display: 'Closed HH'});
                            break;
          case 'PunchyKick': this.button7.current.focus();
                             this.pad7.current.volume = this.state.volume / 100;
                             this.pad7.current.play();
                             this.pad7.current.currentTime = null;
                             this.setState({display: 'Punchy Kick'});
                             break;
          case 'SideStick': this.button8.current.focus();
                            this.pad8.current.volume = this.state.volume / 100;
                            this.pad8.current.play();
                            this.pad8.current.currentTime = null;
                            this.setState({display: 'Side Stick'});
                            break;
          case 'Snare': this.button9.current.focus();
                        this.pad9.current.volume = this.state.volume / 100;
                        this.pad9.current.play();
                        this.pad9.current.currentTime = null;
                        this.setState({display: 'Snare'});
                        break;
        }
  }
  
  handleKeyUp(event) {
    switch(event.keyCode)
      {
        case 81: this.button1.current.blur();
                 break;
        case 87: this.button2.current.blur();
                 break;
        case 69: this.button3.current.blur();
                 break;
        case 65: this.button4.current.blur();
                 break;
        case 83: this.button5.current.blur();
                 break;
        case 68: this.button6.current.blur();
                 break;
        case 90: this.button7.current.blur();
                 break;
        case 88: this.button8.current.blur();
                 break;
        case 67: this.button9.current.blur();
                 break;
      }
  }
  
  handleMouseUp(event) {
    switch(event.target.id)
      {
        case 'Heater1': case 'Chord1': this.button1.current.blur();
                 break;
        case 'Heater2': case 'Chord2': this.button2.current.blur();
                 break;
        case 'Heater3': case 'Chord3': this.button3.current.blur();
                 break;
        case 'Heater4': case 'Shaker': this.button4.current.blur();
                 break;
        case 'Clap': case 'Open_HH': this.button5.current.blur();
                 break;
        case 'OpenHH': case 'Closed_HH': this.button6.current.blur();
                 break;
        case 'KickNHat': case 'PunchyKick': this.button7.current.blur();
                 break;
        case 'Kick': case 'SideStick': this.button8.current.blur();
                 break;
        case 'ClosedHH': case 'Snare': this.button9.current.blur();
                 break;
      }
  }
  
  render() {
    return (
      <div id="wrapper">
        <div id="drum-machine">
          <div id="header">
            <span id="title">FCC</span>
            <i id="logo" className="fa fa-free-code-camp" />
          </div>
          <div id="input">
            <div id="pads">
              <div className="row">
                <button ref={this.button1} className={this.state.power ? "drum-pad powerOn" : "drum-pad powerOff"} id={this.state.bank ? "Chord1" : "Heater1"} onMouseDown={this.handleClick} onKeyUp= {this.handleKeyUp} onMouseUp= {this.handleMouseUp}>Q<audio className="clip" id="Q" src={this.state.bank ? "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"} type="audio/mp3" ref={this.pad1} />
                </button>
                <button ref={this.button2} className={this.state.power ? "drum-pad powerOn" : "drum-pad powerOff"} id={this.state.bank ? "Chord2" : "Heater2"} onMouseDown={this.handleClick} onKeyUp= {this.handleKeyUp} onMouseUp= {this.handleMouseUp}>W<audio className="clip" id="W" src={this.state.bank ? "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"} type="audio/mp3" ref={this.pad2} />    
                </button>
                <button ref={this.button3} className={this.state.power ? "drum-pad powerOn" : "drum-pad powerOff"} id={this.state.bank ? "Chord3" : "Heater3"} onMouseDown={this.handleClick} onKeyUp= {this.handleKeyUp} onMouseUp= {this.handleMouseUp}>E<audio className="clip" id="E" src={this.state.bank ? "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"} type="audio/mp3" ref={this.pad3} />  </button>
              </div>
              <div className="row">
                <button ref={this.button4} className={this.state.power ? "drum-pad powerOn" : "drum-pad powerOff"} id={this.state.bank ? "Shaker" : "Heater4"} onMouseDown={this.handleClick} onKeyUp= {this.handleKeyUp} onMouseUp= {this.handleMouseUp}>A<audio className="clip" id="A" src={this.state.bank ? "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"} type="audio/mp3" ref={this.pad4} /></button>
                <button ref={this.button5} className={this.state.power ? "drum-pad powerOn" : "drum-pad powerOff"} id={this.state.bank ? "Open_HH" : "Clap"} onMouseDown={this.handleClick} onKeyUp= {this.handleKeyUp} onMouseUp= {this.handleMouseUp}>S<audio className="clip" id="S" src={this.state.bank ? "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"} type="audio/mp3" ref={this.pad5} /></button>
                <button ref={this.button6} className={this.state.power ? "drum-pad powerOn" : "drum-pad powerOff"} id={this.state.bank ? "Closed_HH" : "OpenHH"} onMouseDown={this.handleClick} onKeyUp= {this.handleKeyUp} onMouseUp= {this.handleMouseUp}>D<audio className="clip" id="D" src={this.state.bank ? "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"} type="audio/mp3" ref={this.pad6} /></button>
              </div>
              <div className="row">
                <button ref={this.button7} className={this.state.power ? "drum-pad powerOn" : "drum-pad powerOff"} id={this.state.bank ? "PunchyKick" : "KickNHat"} onMouseDown={this.handleClick} onKeyUp= {this.handleKeyUp} onMouseUp= {this.handleMouseUp}>Z<audio className="clip" id="Z" src={this.state.bank ? "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"} type="audio/mp3" ref={this.pad7} /></button>
                <button ref={this.button8} className={this.state.power ? "drum-pad powerOn" : "drum-pad powerOff"} id={this.state.bank ? "SideStick" : "Kick"} onMouseDown={this.handleClick} onKeyUp= {this.handleKeyUp} onMouseUp= {this.handleMouseUp}>X<audio className="clip" id="X" src={this.state.bank ? "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"} type="audio/mp3" ref={this.pad8} /></button>
                <button ref={this.button9} className={this.state.power ? "drum-pad powerOn" : "drum-pad powerOff"} id={this.state.bank ? "Snare" : "ClosedHH"} onMouseDown={this.handleClick} onKeyUp= {this.handleKeyUp} onMouseUp= {this.handleMouseUp}>C<audio className="clip" id="C" src={this.state.bank ? "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"} type="audio/mp3" ref={this.pad9} /></button>
              </div>
            </div>
            <div id="controls">
              <div className="switch">
                <div id="switch1">
                  <h3>POWER</h3>
                  <input type="checkbox" id="power" onClick={this.togglePower} />
                  <label for="power"></label>
                </div>
                <div id="switch2">
                  <h3>BANK</h3>
                  <input type="checkbox" id="bank" onClick={this.toggleBank} disabled={this.state.power ? false : true} />
                  <label for="bank"></label>
                </div>
              </div>
              <h3>DISPLAY</h3>
              <div id="display">
                <span>{this.state.power ? this.state.display : ""}</span>
              </div>
              <h3>VOLUME</h3>
              <div className="slider">
                <input type="range" min="0" max="100" disabled={this.state.power ? false : true} onChange={this.adjustVolume} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById('target'));
