import React from 'react';
import PropTypes from 'prop-types';
import Category from '../../components/Category';

const CategoryMenu = ({ lobbyCategories, toggleCategory }) => {
	let lobbyCategoriesElements = null;

	lobbyCategoriesElements = lobbyCategories.map(category => <Category
		key={category.id}
		id={category.id}
		active={category.active}
		displayName={category.displayName}
		toggleCategory={toggleCategory}
		/>);

	return (
		<div>
			<nav>
				{lobbyCategoriesElements}
			</nav>
		</div>
	);
};

CategoryMenu.propTypes = {
	lobbyCategories: PropTypes.array.isRequired,
	toggleCategory: PropTypes.func.isRequired
};

export default CategoryMenu;
