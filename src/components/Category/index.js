import React from 'react';
import PropTypes from 'prop-types';
import './category.css';

const Category = ({ displayName, id, active, toggleCategory }) => {
	const toggleCategoryWithId = (e) => {
		e.preventDefault();
		toggleCategory(id);
	};
	return <a onClick={toggleCategoryWithId} className={`category-item ${active ? 'active' : ''}`}>
				{displayName}
			</a>;
};

Category.propTypes = {
	displayName: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
	toggleCategory: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired
};

export default Category;
