import React from 'react';
import PropTypes from 'prop-types';
import Game from '../../components/Game';

const Games = ({ games }) => {
	const gamesElements = games.map(game => <Game
		key={game.id}
		lobbyName={game.lobbyName}
		gameLaunchUrlTemplate={game.gameLaunchUrlTemplate}
		gameIconsUrlTemplate={game.gameIconsUrlTemplate}/>);
	return (
		<ul>
			{gamesElements}
		</ul>
	);
};

Games.propTypes = {
	games: PropTypes.array.isRequired
};

export default Games;
