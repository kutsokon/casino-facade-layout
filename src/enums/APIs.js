import { deviceType } from '../utils/deviceDetection';

export const mainUrl = 'https://wl-api-facade.herokuapp.com';
export const configApi = '/api/config';
export const playerInfoApi = '/api/player/info';
export const gamesApi = `/api/lobby/games/${deviceType}`;
export const brandNamePlaceholder = '{config.brandName}';
export const gameIdPlaceholder = '{game.id}';
