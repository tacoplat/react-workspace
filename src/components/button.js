import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			name: props.name
		};
	}
	increment() {
		this.setState({
			count: this.state.count + 1		
		});
	};
	decrement() {
		this.setState({
			count: this.state.count - 1		
		});
	};
	reset() {
		this.setState({
			count: 0		
		});
	};

	render()
	{
		return (
		<div>
			<button onClick={(e) => this.increment(e)} className='btn noselect'>Increment</button>
			<button onClick={(e) => this.decrement(e)} className='btn noselect'>Decrement</button>
			<button onClick={(e) => this.reset(e)} className='btn noselect'>Reset</button>
			<h3>Current Count: {this.state.count}</h3>
		</div>
		);
	}

}
export default Button;