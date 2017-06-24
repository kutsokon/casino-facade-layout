import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ logoUrl }) => (
		<div>
			<img src={logoUrl}/>
		</div>
	);

Logo.propTypes = {
	logoUrl: PropTypes.string.isRequired
};

export default Logo;
