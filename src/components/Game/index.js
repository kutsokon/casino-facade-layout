import React from 'react';
import PropTypes from 'prop-types';
import deafultImage from '../../assets/default.png';
import './game.css';

const Game = ({ lobbyName, gameLaunchUrlTemplate, gameIconsUrlTemplate }) => {
	const repleaceBrokenImg = (e) => {
		e.target.onerror = null;
		e.target.src = deafultImage;
	};
	return (
		<li>
			<a className="game-play-button" href={gameLaunchUrlTemplate}>
				<div>
					<img className="game-icon" onError={repleaceBrokenImg} src={gameIconsUrlTemplate} />
				</div>
				<p>{lobbyName}</p>
				<div className="hidden-button">Play</div>
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
