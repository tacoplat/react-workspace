import React, { Component } from 'react';

var rand;
var background;

class Dice extends Component {

	constructor(props) {
		super(props);
		this.state = {
			outcome: ""
		};
		background = "/diedefault.svg";
	}

	roll() {
		rand = Math.floor(Math.random() * 6) + 1;
		background = "/die" + rand + ".svg";
		console.log(rand);
		this.setState({
			outcome : rand
		});
	}

	render() {
		return (
			<div>
				<img id='dice' alt='dice' src={background} onMouseOver={(e) => this.roll(e)} />
				<h3>You rolled: {this.state.outcome}</h3>
			</div>
		);
	}
}

export default Dice;