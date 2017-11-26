import React from 'react';
import Player from './Player.js'

const CardInfo = (props) => {
	return(
		<div className="card_info">
			<div className="card_info_teamLogo"/>
			<Player 
				name={props.player.name}
				position={props.player.position}
			/>
		</div>
	);
};

export default CardInfo