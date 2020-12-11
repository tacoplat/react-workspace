import React, { Component } from 'react';
import Button from './components/button';
import Greeting from './components/greeting';
import Dice from './components/dice';
import { TextField } from './components/textfield';

var defaultGuess = "Your Guess";

class App extends Component {
  constructor(props) {
    super(props)
    const min = 1;
    const max = 100;
    this.state = {
      random: (min + Math.random() * (max-min)).toFixed(0),
      value: "Insert Name Here",
      maximum: max,
      minimum: min,
      guess: defaultGuess,
      message: "Output",
      disabled: ""
    }
  }

handleChange(e) {
  this.setState({
    value: e.target.value
  });
}
resetGame() {
  const min = 1;
  const max = 100;
  this.setState({
    minimum: Number(min),
    maximum: Number(max),
    random: (min + Math.random() * (max-min)).toFixed(0),
    message: "Output",
    guess: defaultGuess,
    disable: "",
    guessLength: ""
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
    this.setState({
      random: (min + Math.random() * (max-min)).toFixed(0),
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
    this.setState({
      random: (min + Math.random() * (max-min)).toFixed(0),
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
        message: "Epic! You guessed the right number!",
        disable: "disable",
        guessLength: (String(guess).length) + "ch"
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
        <div id='game'>
          <h3 id='gameheader'>Guessing Game</h3>
          <label for='min'>Minimum Value</label>
          <input name='min' type='text' class='txtfld' autocomplete='off' value={this.state.minimum} onChange={(e) => {this.setMin(e)}}></input><br />
          <label for='max'>Maximum Value</label>
          <input name='max' type='text' class='txtfld' autocomplete='off' value={this.state.maximum} onChange={(e) => {this.setMax(e)}}></input><br />
          <label for='guess'>Guess</label>
          <input name='guess' type='text' class='txtfld' style={{width: this.state.guessLength}} autocomplete='off' disabled={(this.state.disable)? "disabled" : ""} value={this.state.guess} onChange={(e) => {this.checkGuess(e)}}></input>
          <button class="btn" onClick={(e) => {this.resetGame(e)}}>Reset</button>
          <div id='output'>{this.state.message}</div>
          {/*<div>Min: {this.state.minimum}, Max: {this.state.maximum}, Rand: {this.state.random}, Guess: {this.state.guess}</div>*/}
        </div>
      </div>
    </div>
  );
  }
}

export default App;
