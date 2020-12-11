import React, { Component } from 'react';

var msg;

class Greeting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 0
		};
	}
	greet() {
		if (this.state.active == 0) {
			msg = "What's updog?";
			this.setState({
				active: this.state.active = 1
			});
		} else {
			msg = "See ya later alligator!";
			this.setState({
				active: this.state.active = 0
			});
		}
	}
	render() {
		return (
			<div id="greetingcontent">
				<button className='btn noselect' onClick={(e) => this.greet(e)}>Click Me</button>
				<h3 id='greetingmsg'>{msg}</h3>
			</div>
		);
	}
}
export default Greeting;