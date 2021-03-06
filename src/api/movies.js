const API_KEY = '033555199cb9b772727c4fa1f410c488';
const API_PREFIX_URL = 'https://api.themoviedb.org/3';

export default function ( page = 1) {
    return fetch(
        `${API_PREFIX_URL}/movie/popular?api_key=${API_KEY}&page=${page}`,
        {
            method: "GET"
        }
    ).then(res => {
        return res.json()
    })
}

export function fetchSearchData (query) {
    console.log('queryfrom API',query);
    return fetch(
        `${API_PREFIX_URL}/search/movie?include_adult=true&query=${query}&api_key=${API_KEY}`,
        {
            method: "GET"
        }
    ).then(res => {
        return res.json()
    })
}


export function fetchMovieData (id) {
    return fetch(
        `${API_PREFIX_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
        {
            method: "GET"
        }
    ).then(res => {
        return res.json()
    })
}

export function fetchRelatedMovies (id) {
    return fetch(
        `${API_PREFIX_URL}/movie/${id}/similar?api_key=${API_KEY}&page=1`,
        {
            method: "GET"
        }
    ).then(res => {
        return res.json()
    })
}