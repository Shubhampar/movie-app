import axios from 'axios';

const API_KEY = 'a80e2e794033d57e12a1da3f1ba3cc8a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
