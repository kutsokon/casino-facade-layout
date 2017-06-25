import React from 'react';
import PropTypes from 'prop-types';
import './logo.css';

const Logo = ({ logoUrl }) => (
		<div className="logo">
			<img className="logo-icon" src={logoUrl}/>
		</div>
	);

Logo.propTypes = {
	logoUrl: PropTypes.string.isRequired
};

export default Logo;
