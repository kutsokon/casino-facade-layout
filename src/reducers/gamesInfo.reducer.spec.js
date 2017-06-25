import gamesInfo from './gamesInfo.reducer';
import * as types from '../enums/actionTypes';

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
