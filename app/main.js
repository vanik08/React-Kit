import React from 'react';
import {Comp2} from './Components/Comp2';

export class Comp extends React.Component {
	render() {
		return <h1>Hello charlie!</h1>
	}
}

React.render(<Comp2 />, document.getElementById('content'));