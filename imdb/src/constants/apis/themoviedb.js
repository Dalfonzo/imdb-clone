export const KEY = '?api_key=3e2cc31e8a094dc74d7fa8c446b0c3fa';
export const API_BASE_URL = 'https://api.themoviedb.org/3/';
export const CONFIG = '&language=en-US&page=';

export const UPCOMING_MOVIES =
  API_BASE_URL + 'movie/upcoming' + KEY + CONFIG + '1';

export const POPULAR_MOVIES = API_BASE_URL + 'movie/popular' + KEY + CONFIG;

export const PLAYING_MOVIES =
  API_BASE_URL + 'movie/now_playing' + KEY + CONFIG + '1';

export const CELEBRITIES = API_BASE_URL + 'person/popular' + KEY + CONFIG + '1';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/';
const SMALL = 'w185';
const MEDIUM = 'w500';
const FULL = 'w1280';

export const SMALL_IMG = IMG_BASE_URL + SMALL;
export const MEDIUM_IMG = IMG_BASE_URL + MEDIUM;
export const FULL_IMG = IMG_BASE_URL + FULL;
