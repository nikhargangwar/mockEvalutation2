export const BACKEND_URL = 'http://localhost:8080';

export const GET_SONGS_DATA = () => ({
  url: `${BACKEND_URL}/api/records`,
  method: 'GET',
});

export const GET_SONG_DATA = (id) => ({
  url: `${BACKEND_URL}/api/records/${id}/likes`,
  method: 'GET',
});

export const LIKE_SONG = (id) => ({
  url: `${BACKEND_URL}/api/records/${id}/likes`,
  method: 'PATCH',
});
