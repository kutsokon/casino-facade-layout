import React from 'react';
import PropTypes from 'prop-types';
import CategoryMenuButton from '../../components/CategoryMenuButton';
import Logo from '../../components/Logo';
import PlayerInfo from '../../components/PlayerInfo';
import './header.css';

const Header = ({ playerInfo, logoUrlTemplate, toggleCategoryMenu }) => (
	<div className="header-wrapper">
		<div className="header-logo">
			<CategoryMenuButton toggleCategoryMenu={toggleCategoryMenu}/>
			<Logo logoUrl={logoUrlTemplate}/>
		</div>
		<PlayerInfo displayName={playerInfo.displayName} balance={playerInfo.balance} />
	</div>
);

Header.propTypes = {
	playerInfo: PropTypes.object.isRequired,
	logoUrlTemplate: PropTypes.string.isRequired,
	toggleCategoryMenu: PropTypes.func.isRequired
};

export default Header;
