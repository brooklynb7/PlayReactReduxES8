import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const element = () => (
	<div>
		<h2>Hello, world!</h2>
		<RaisedButton label="Default" />
	</div>
)

class Hello extends Component {
	render() {
		return (element());
	}
}

export default Hello;