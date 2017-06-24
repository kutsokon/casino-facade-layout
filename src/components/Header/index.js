import React from 'react';
import PropTypes from 'prop-types';
import CategoryMenuButton from '../../components/CategoryMenuButton';
import Logo from '../../components/Logo';
import PlayerInfo from '../../components/PlayerInfo';

const Header = ({ playerInfo, logoUrlTemplate, toggleCategoryMenu }) => (
		<div>
			<CategoryMenuButton toggleCategoryMenu={toggleCategoryMenu}/>
			<Logo logoUrl={logoUrlTemplate}/>
			<PlayerInfo displayName={playerInfo.displayName} balance={playerInfo.balance} />
		</div>
	);

Header.propTypes = {
	playerInfo: PropTypes.object.isRequired,
	logoUrlTemplate: PropTypes.string.isRequired,
	toggleCategoryMenu: PropTypes.func.isRequired
};

export default Header;
