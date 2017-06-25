import React from 'react';
import PropTypes from 'prop-types';
import './player-info.css';

const PlayerInfo = ({ displayName, balance }) => (
	<div className="player-info">
		<div>Name: {displayName}</div>
		<div>Cash: {balance.cash}</div>
		<div>Bonus: {balance.bonus}</div>
	</div>
);

PlayerInfo.propTypes = {
	displayName: PropTypes.string.isRequired,
	balance: PropTypes.object.isRequired
};

export default PlayerInfo;
