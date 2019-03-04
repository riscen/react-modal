import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './popup.css';

class Popup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blockBackground: props.blockBackground !== undefined ? 
				props.blockBackground : true,
			contentsElement: null,
			height: props.height ? props.height : '50%',
			toggleOnBackgroundClick: props.toggleOnBackgroundClick !== undefined ? 
				props.toggleOnBackgroundClick : true,
			width: props.width ? props.width : '50%'
		};
	}

	render = () => {
		const contentsElement = this.state.contentsElement;
		let width = 0;
		let height = 0;
		if (contentsElement) {
			width = contentsElement.clientWidth;
			height = contentsElement.clientHeight;
		}
		console.log(width, height);
		return (
			<React.Fragment>
			{
				this.props.isActive ? (
					<React.Fragment>
						<div className="react-popup" onClick={() => this.props.togglePopUp()} />
						<div 
							className="react-popup-contents" 
							style={{
								height: this.state.height,
								left: `calc(50% - ${width / 2}px)`,
								top: `calc(50% - ${height / 2}px)`,
								width: this.state.width
							}}
							ref={el => {
								if (!this.state.contentsElement) {
									this.setState({contentsElement: el});
								}
							}}
						>
							{this.props.children}
						</div>
					</React.Fragment>
				) : <React.Fragment />
			}
			</React.Fragment>
		);
	}
}

Popup.propTypes = {
	blockBackground: PropTypes.bool,
	children: PropTypes.node,
	height: PropTypes.string,
	isActive: PropTypes.bool,
	togglePopUp: PropTypes.func,
	toggleOnBackgroundClick: PropTypes.bool,
	width: PropTypes.string
}

export default Popup;