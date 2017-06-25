import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import CategoryMenu from '../../components/CategoryMenu';
import Games from '../../components/Games';
import Spinner from '../../components/Spinner';
import * as pageActions from './page.actions';
import './page.css';

class Page extends Component {
	render() {
		const { playerInfo, config, gamesInfo } = this.props;
		const { toggleCategory, toggleCategoryMenu } = this.props.pageActions;
		return (
			<div>
				<Header
					playerInfo={playerInfo}
					logoUrlTemplate={config.logoUrlTemplate}
					toggleCategoryMenu={toggleCategoryMenu}/>
				<CategoryMenu
					lobbyCategories={config.lobbyCategories}
					toggleCategory={toggleCategory}
					isCategoryMenuOpened={config.isCategoryMenuOpened}/>
				{(gamesInfo.gamesFetching
					? <Spinner />
					: <Games games={gamesInfo.games}/>)}
			</div>
		);
	}
}

Page.propTypes = {
	pageActions: PropTypes.object.isRequired,
	playerInfo: PropTypes.object.isRequired,
	config: PropTypes.object.isRequired,
	gamesInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
		playerInfo: state.playerInfo,
		config: state.config,
		gamesInfo: state.gamesInfo
	});

const mapDispatchToProps = dispatch => ({
		pageActions: bindActionCreators(pageActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
