import React from 'react';
import PropTypes from 'prop-types';
import './category-menu.css';

const CategoryMenuButton = ({ toggleCategoryMenu }) =>
	<div className="menu-button" onClick={toggleCategoryMenu}></div>;

CategoryMenuButton.propTypes = {
	toggleCategoryMenu: PropTypes.func.isRequired
};

export default CategoryMenuButton;
