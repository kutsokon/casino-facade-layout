import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Page from './containers/Page';
import Spinner from './components/Spinner';

const App = ({ pageFetching }) => (
		<div>
			{pageFetching
				? <Spinner />
				: <Page />}
		</div>
	);

App.propTypes = {
	pageFetching: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
	pageFetching: state.pageFetching
});

export default connect(mapStateToProps)(App);
