import React, { Component } from 'react';
import Button from './components/button';
import Greeting from './components/greeting';
import Dice from './components/dice';
import TextField from './components/textfield';
import Draggable from 'react-draggable';
//import Countdown from './components/countdown'

var defaultGuess = "Your Guess";

class App extends Component {
  constructor(props) {
    super(props)
    var min = 1;
    var max = 100;
    var randomNbr = (min + Math.random() * (max-min)).toFixed(0);
    this.state = {
      random: randomNbr,
      value: "Insert Name Here",
      maximum: max,
      minimum: min,
      guess: defaultGuess,
      message: "Output",
      disabled: "",
      debug: 0,
      randLength: String(randomNbr).length + "ch",
      wins: 0,
      changeColor: 0
    }
  }

handleChange(e) {
  this.setState({
    value: e.target.value
  });
}
resetGame(e) {
  const min = 1;
  const max = 100;
  const randomNbr = (min + Math.random() * (max-min)).toFixed(0);
  this.setState({
    minimum: Number(min),
    maximum: Number(max),
    random: randomNbr,
    message: "Output",
    guess: defaultGuess,
    disable: "",
    guessLength: "",
    randLength: String(randomNbr).length + "ch"
  });
}
setMin(e) {
  var max = Number(this.state.maximum);
  var min = Number(e.target.value);
  this.setState({
    minimum: min,
    message: "Output"
  });
  if (min <= max) {
    var randomNbr = (min + Math.random() * (max-min)).toFixed(0);
    this.setState({
      random: randomNbr,
      randLength: String(randomNbr).length + "ch",
      guess: defaultGuess
    });
  } else if (isNaN(min)) {
    this.setState({
      minimum: "",
      random: "",
      message: "Please choose a positive integer value!"
    });
  } else {
    this.setState({
      random: "",
      message: "Make sure your minimum value is less than the maximum value!"
    });
  }
}
setMax(e) {
  var max = Number(e.target.value);
  var min = Number(this.state.minimum);
  this.setState({
    maximum: max,
    message: "Output"
  });
  if (max >= min) {
    var randomNbr = (min + Math.random() * (max-min)).toFixed(0);
    this.setState({
      random: randomNbr,
      randLength: String(randomNbr).length + "ch",
      guess: defaultGuess
    });
  } else if (isNaN(max)) {
    this.setState({
      maximum: "",
      random: "",
      message: "Please choose a positive integer value!"
    });
  } else {
    this.setState({
      random: "0",
      message: "Make sure your maximum value is greater than the minimum value!"
    });
  }
}
setRand(e) {
  var rand = e.target.value;
  if(rand >= this.state.minimum && rand <= this.state.maximum) {
    this.setState({
      random: rand,
      randLength: (String(rand).length) + "ch"
    });
  } else {
    this.setState({
      random: ""
    });
  }
}
checkGuess(e) {
  var guess = Number(e.target.value);
  this.setState({
    guess: guess
  });
  if(guess >= this.state.minimum && guess <= this.state.maximum) {
    if (guess > this.state.random) {
      this.setState({
        message: "Your guess is too high!"
      });
    } else if (guess < this.state.random) {
      this.setState({
        message: "Your guess is too low!"
      });
    } else if (guess == this.state.random) {
      this.setState({
        message: "Nice work! You guessed the right number!",
        disable: "disable",
        guessLength: (String(guess).length) + "ch",
        wins: this.state.wins + 1
      });
    }
  } else if (isNaN(guess)) {
    this.setState({
      guess: "",
      message: "Please choose a positive integer value!"
    });
  } else if (guess !== ""){
    this.setState({
      message: "Make sure your guess is within the parameters!"
    });
  }
}
toggleDebug(e) {
  if (this.state.debug == 0) {
    this.setState({
      debug: 1
    });
  } else {
    this.setState({
      debug: 0
    });
  }
}

changeColor(e) {
  var obj = document.getElementById("test");
  var rect = obj.getBoundingClientRect();

  var obj2 = document.getElementById("test-2");
  var rect2 = obj2.getBoundingClientRect();

  this.setState({
    x: rect.left,
    y: rect.top,
    x2: rect2.left,
    y2: rect2.top
  });

  if((this.state.x > (this.state.x2 - 2) && this.state.x < (this.state.x2 + 2)) && this.state.y > (this.state.y2 - 2) && this.state.y < (this.state.y2 + 2)) {
    if(this.state.changeColor == 0) {
      this.setState({
        changeColor: 1
      });
    } else {
      this.setState({
        changeColor: 0
      });
    }
  }

console.log(rect.left, rect.top);
}

rotateEl(e) {
  
}

render() {
  return (
    <div className="App">
      <h1>React Workspace</h1>
      <div class='container'>
        <input type='text' class='txtfld' value={this.state.value} onChange={(e) => {this.handleChange(e)}}></input>
        <Button rnd={this.state.random}/>
        <Greeting />
        <div class='break'></div>
        <Dice />
        <div id='textboxgroup'>
          <TextField labelName='1' labelContent='Name'/>
          <TextField labelName='2' labelContent='E-mail' />
        </div>
        <p>This is a paragraph.</p>
  
  <div class='break'></div>
        <Draggable handle='#drag' axis="x">
          <div id='game'>
            <button id='debuggame' onClick={(e)=>this.toggleDebug(e)} class={this.state.debug ? "dbgactive" : ""}></button>
            <h3 id='gameheader'>Guessing Game</h3>
            <label for='min'>Minimum Value</label>
            <input name='min' type='text' class='txtfld' autocomplete='off' disabled={(this.state.disable)? "disabled" : ""} value={this.state.minimum} onChange={(e) => {this.setMin(e)}}></input><br />
            <label for='max'>Maximum Value</label>
            <input name='max' type='text' class='txtfld' autocomplete='off' disabled={(this.state.disable)? "disabled" : ""} value={this.state.maximum} onChange={(e) => {this.setMax(e)}}></input><br />
            <label for='guess'>Guess</label>
            <input name='guess' type='text' id='guessfld' class='txtfld' style={{width: this.state.guessLength}} autocomplete='off' disabled={(this.state.disable)? "disabled" : ""} value={this.state.guess} onChange={(e) => {this.checkGuess(e)}}></input>
            <button class="btn" onClick={(e) => {this.resetGame(e)}}>Reset</button>
            <div id='output'>{this.state.message}</div>
            <div id='stats'><b>Wins</b>: {this.state.wins}</div>
            {this.state.debug ? 
            <div id='debuginfo'>
              <b>Debug Mode</b>
              <br />
              <span class='att'>Min:</span> {this.state.minimum} <span class='att'>Max:</span> {this.state.maximum} <span class='att'>Rand:</span> {this.state.random} 
              <br />
              <span class='att'>Guess:</span> {this.state.guess}
              <br />
              <label for="forcernd" class='att'>Set Rand: </label>
              <input name='forcernd' type='text' class='txtfld forcernd' autocomplete='off' style={{width: this.state.randLength}} value={this.state.random} onChange={(e) => {this.setRand(e)}}></input>
              </div>
              : ""}
            <div id='drag'>

            </div>
          </div>
        </Draggable>
        {/*<Countdown eventName='Last week of March' eventDate='03/29/2021'></Countdown>
        <Countdown eventName='First week of May' eventDate='05/03/2021'></Countdown>
        <Countdown eventName='End of school year' eventDate='06/28/2021'></Countdown>*/}
        <Draggable onStop={(e) => {this.changeColor(e)}}>
          <div id="test">
          </div>
        </Draggable>
        <div id="test-2" className={this.state.changeColor ? "blue" : ""}></div>
        <div class='break'></div>
        <div id="test-3"></div>
      </div>
    </div>
  );
  }
}

export default App;
