import React from 'react';
import Card from './Card.js';

const Cards = (props) => {
	return(
		<section className="cards">
		{
			props.players.map((player) => (
				<Card
					key={player.name}
					player={player}
          handleImage={props.handleImageLoaded}
          handleError={props.handleImageErrored}
				/>
			))
		}
		</section>
	);
}

export default Cards