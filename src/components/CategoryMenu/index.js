import React from 'react';
import PropTypes from 'prop-types';
import Category from '../../components/Category';
import './categories-menu.css';

const CategoryMenu = ({ lobbyCategories, toggleCategory, isCategoryMenuOpened }) => {
	const lobbyCategoriesElements = lobbyCategories.map(category =>
		<Category
			key={category.id}
			id={category.id}
			active={category.active}
			displayName={category.displayName}
			toggleCategory={toggleCategory}
			/>);
	return (
		<div className={`categories-menu ${isCategoryMenuOpened ? 'opened' : 'closed'}`}>
			<h2>Game categories:</h2>
			<nav>
				{lobbyCategoriesElements}
			</nav>
		</div>
	);
};

CategoryMenu.propTypes = {
	lobbyCategories: PropTypes.array.isRequired,
	toggleCategory: PropTypes.func.isRequired,
	isCategoryMenuOpened: PropTypes.bool.isRequired
};

export default CategoryMenu;
