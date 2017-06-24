import { pageFetching, config, playerInfo, gamesInfo } from './page.reducer';
import * as types from '../../enums/ActionTypes';

test('START_FETCHING_PAGE action', () => {
	expect(
		pageFetching({}, {
			type: types.START_FETCHING_PAGE
		})
	).toBeTruthy();
});

test('FINISH_FETCHING_PAGE action', () => {
	expect(
		pageFetching({}, {
			type: types.FINISH_FETCHING_PAGE
		})
	).toBeFalsy();
});

test('initial config state', () => {
	expect(
		config(undefined, {})
	).toEqual({
		brandName: '',
		lobbyCategories: [],
		isCategorySectionOpened: false,
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
			isCategorySectionOpened: true
		}, {
			type: types.TOGGLE_CATEGORY_MENU
		})
	).toEqual({
		isCategorySectionOpened: false
	});
});

test('initial playerInfo state', () => {
	expect(
		playerInfo(undefined, {})
	).toEqual({
		displayName: '',
		balance: {
			cash: 0,
			bonus: 0
		}
	});
});

test('RECEIVE_PLAYER_INFO action', () => {
	expect(
		playerInfo({}, {
			type: types.RECEIVE_PLAYER_INFO,
			playerInfo: {
				displayName: 'John Dow',
				balance: {
					cash: 10.33,
					bonus: 3.11
				}
			}
		})
	).toEqual({
		displayName: 'John Dow',
		balance: {
			cash: 10.33,
			bonus: 3.11
		}
	});
});

test('initial gamesInfo state', () => {
	expect(
		gamesInfo(undefined, {})
	).toEqual({
		gamesFetching: true,
		games: []
	});
});

test('START_FETCHING_GAMES action', () => {
	expect(
		gamesInfo({}, {
			type: types.START_FETCHING_GAMES
		})
	).toEqual({
		gamesFetching: true
	});
});

test('FINISH_FETCHING_GAMES action', () => {
	expect(
		gamesInfo({}, {
			type: types.FINISH_FETCHING_GAMES
		})
	).toEqual({
		gamesFetching: false
	});
});

test('RECEIVE_GAMES_WITH_URLS action', () => {
	expect(
		gamesInfo({}, {
			type: types.RECEIVE_GAMES_WITH_URLS,
			games: [
				{
					id: 56,
					lobbyName: 'Hunting Season',
					devices: [
						'mobile',
						'desktop'
					],
					categories: [
						'slots'
					]
				},
				{
					id: 57,
					lobbyName: 'Poker',
					devices: [
						'mobile'
					],
					categories: [
						'slots'
					]
				}
			],
			gameLaunchUrlTemplate: 'https://test.com?gameId={game.id}',
			gameIconsUrlTemplate: 'https://test.com/id_{game.id}.png',
			deviceType: 'mobile'
		})
	).toEqual({
		games: [
			{
				id: 56,
				lobbyName: 'Hunting Season',
				devices: [
					'mobile',
					'desktop'
				],
				categories: [
					'slots'
				],
				gameLaunchUrlTemplate: 'https://test.com?gameId=56',
				gameIconsUrlTemplate: 'https://test.com/id_56.png'
			},
			{
				id: 57,
				lobbyName: 'Poker',
				devices: [
					'mobile'
				],
				categories: [
					'slots'
				],
				gameLaunchUrlTemplate: 'https://test.com?gameId=57',
				gameIconsUrlTemplate: 'https://test.com/id_57.png'
			}
		]
	});
});
