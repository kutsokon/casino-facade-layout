import React from 'react';
import PropTypes from 'prop-types';

const CategoryMenuButton = ({ toggleCategoryMenu }) => (
	<div onClick={toggleCategoryMenu}>CategoryMenuButton</div>
);

CategoryMenuButton.propTypes = {
	toggleCategoryMenu: PropTypes.func.isRequired
};

export default CategoryMenuButton;
