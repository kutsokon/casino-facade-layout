import config from './config.reducer';
import * as types from '../enums/actionTypes';

test('initial config state', () => {
	expect(
		config(undefined, {})
	).toEqual({
		brandName: '',
		lobbyCategories: [],
		isCategoryMenuOpened: false,
		gameLaunchUrlTemplate: '',
		gameIconsUrlTemplate: '',
		logoUrlTemplate: ''
	});
});

test('RECEIVE_CONFIG action', () => {
	expect(
		config({}, {
			type: types.RECEIVE_CONFIG,
			config: {
				brandName: 'tain',
				lobbyCategories: [
					{
						id: 'slots',
						displayName: 'Slots'
					},
					{
						id: 'video_poker',
						displayName: 'Video Poker'
					}
				],
				gameLaunchUrlTemplate: 'https://tain.com?gameId={game.id}',
				gameIconsUrlTemplate: 'https://tain.com/id_{game.id}.png',
				logoUrlTemplate: 'https://tain.com/{config.brandName}_logo.png'
			}
		})
	).toEqual({
		brandName: 'tain',
		lobbyCategories: [
			{
				id: 'slots',
				displayName: 'Slots',
				active: true
			},
			{
				id: 'video_poker',
				displayName: 'Video Poker',
				active: false
			}
		],
		gameLaunchUrlTemplate: 'https://tain.com?gameId={game.id}',
		gameIconsUrlTemplate: 'https://tain.com/id_{game.id}.png',
		logoUrlTemplate: 'https://tain.com/tain_logo.png'
	});
});

test('TOGGLE_CATEGORY action', () => {
	expect(
		config({
			lobbyCategories: [
				{
					id: 'slots',
					displayName: 'Slots',
					active: false
				},
				{
					id: 'video_poker',
					displayName: 'Video Poker',
					active: true
				},
				{
					id: 'table_games',
					displayName: 'Table Games',
					active: false
				}
			]
		}, {
			type: types.TOGGLE_CATEGORY,
			id: 'table_games'
		})
	).toEqual({
		lobbyCategories: [
				{
					id: 'slots',
					displayName: 'Slots',
					active: false
				},
				{
					id: 'video_poker',
					displayName: 'Video Poker',
					active: false
				},
				{
					id: 'table_games',
					displayName: 'Table Games',
					active: true
				}
			]
	});
});

test('TOGGLE_CATEGORY_MENU action', () => {
	expect(
		config({
			isCategoryMenuOpened: true
		}, {
			type: types.TOGGLE_CATEGORY_MENU
		})
	).toEqual({
		isCategoryMenuOpened: false
	});
});
