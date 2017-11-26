import React from 'react';
import CardInfo from './CardInfo.js'
import logo from './rockiesLogo.svg';

// export default class Card extends React.Component {
// 	render() {
// 		const style = {
// 			backgroundImage: "url("+ this.props.player.frontImageUrl +")",
// 			backgroundPosition: "center center",
// 			backgroundSize: "auto 100%"
// 		}
// 		return(
// 			<div 
// 	 			className="card front" 
// 	 			style={ style }
// 	 		>
// 	 			<CardInfo 
// 	 				player={this.props.player}
// 	 			/>
// 	 		</div>
// 		);
// 	}
// }

const Card = (props) => {
	const style = {
		backgroundImage: "url("+ props.player.frontImageUrl +")",
		backgroundPosition: "center center",
		backgroundSize: "auto 100%"
	}
	return(
		<div 
 			className="card front" 
 			style={ style }
 		>
 			<CardInfo 
 				player={props.player}
 			/>
 		</div>
	);
}

export default Card
