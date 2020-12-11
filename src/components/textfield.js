import React, { Component } from 'react';

export class TextField extends Component {
	render() {
	return (
		<div>
			<label className='label noselect' for={this.props.labelName}>{this.props.labelContent}</label>
			<input className='txtfld' name={this.props.labelName}></input>
		</div>
	);
	}
}