import React, {Component} from 'react';

import Popup from './react-popup';

import '../styles/app.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activePopup: false
		};
	}

	togglePopup = () => {
		this.setState({
			activePopup: !this.state.activePopup
		});
	}

	render = () => {
		return (
			<div className="app">
				<div className="app-btn">
					<input 
						type="button" 
						value="Click me" 
						onClick={this.togglePopup} 
					/>
				</div>
				<Popup 
					isActive={this.state.activePopup}
					togglePopUp={this.togglePopup}
				>
					<span>Popup</span>
				</Popup>
			</div>
		);
	}
}

export default App;