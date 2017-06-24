import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ lobbyName, gameLaunchUrlTemplate, gameIconsUrlTemplate }) => (
		<li>
			<a href={gameLaunchUrlTemplate}>
				<img src={gameIconsUrlTemplate} />
				<p>{lobbyName}</p>
			</a>
		</li>
	);

Game.propTypes = {
	lobbyName: PropTypes.string.isRequired,
	gameLaunchUrlTemplate: PropTypes.string.isRequired,
	gameIconsUrlTemplate: PropTypes.string.isRequired
};

export default Game;
