import React from 'react';
import PropTypes from 'prop-types';
import deafultImage from '../../assets/default.png';

const Game = ({ lobbyName, gameLaunchUrlTemplate, gameIconsUrlTemplate }) => {
		const repleaceBrokenImg = (e) => {
			e.target.onerror = null;
			e.target.src = deafultImage;
		};
		return (
			<li>
				<a href={gameLaunchUrlTemplate}>
					<img onError={repleaceBrokenImg} src={gameIconsUrlTemplate} />
					<p>{lobbyName}</p>
				</a>
			</li>
		);
};

Game.propTypes = {
	lobbyName: PropTypes.string.isRequired,
	gameLaunchUrlTemplate: PropTypes.string.isRequired,
	gameIconsUrlTemplate: PropTypes.string.isRequired
};

export default Game;
