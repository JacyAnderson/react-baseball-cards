import React from 'react';

const Player = (props) => {
	return(
		<div className="card_info_player">
			<h3 className="card_info_player_name">{props.name}</h3>
			<span className="card_info_player_position">{props.position}</span>
		</div>
	);
};

export default Player