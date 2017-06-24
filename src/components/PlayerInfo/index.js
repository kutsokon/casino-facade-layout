import React from 'react';
import PropTypes from 'prop-types';

const PlayerInfo = ({ displayName, balance }) => (
		<div>
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
