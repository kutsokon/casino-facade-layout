import React from 'react';
import PropTypes from 'prop-types';
import Game from '../../components/Game';
import './games.css';

const Games = ({ games }) => {
	const gamesElements = games.map(game =>
		<Game
			key={game.id}
			lobbyName={game.lobbyName}
			gameLaunchUrlTemplate={game.gameLaunchUrlTemplate}
			gameIconsUrlTemplate={game.gameIconsUrlTemplate}/>);
	return (
		<ul className="games-list">
			{(gamesElements.length > 0
				? gamesElements
				: <p>No games for this category available...</p>)}
		</ul>
	);
};

Games.propTypes = {
	games: PropTypes.array.isRequired
};

export default Games;
