import axios from "axios";

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '83e80ddc890a2087a14fcba2872ddd84';

axios.defaults.params = {
    api_key: API_KEY,
}

export async function getMovieTrends() {
    return await axios(`${URL}/trending/all/day`);
}

export async function getSearchMovie(query, page) {
    return await axios(`${URL}/search/movie?query=${query}&page=${page}`)
}

export async function getMovieDetails(movieId) {
    
    return await axios(`${URL}/movie/${movieId}`)
}


export async function getMovieCredits(movieId) {
    return await axios(`${URL}/movie/${movieId}/credits`)
}

export async function getMovieReviews(movieId) {
    return await axios(`${URL}/movie/${movieId}/reviews`)
}