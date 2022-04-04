import axios from 'axios';

// ACTION TYPES
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
const GET_MOVIES_FAIL = 'GET_MOVIES_FAIL';
const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
const GET_MOVIE_FAIL = 'GET_MOVIE_FAIL';
const LOADING_MOVIE = 'LOADING_MOVIE';
const LOADING_MOVIES = 'LOADING_MOVIES';

// STATE
const initialState = {
  movies: [],
  movie: null,
  loadingMovie: false,
  loadingMovies: false,
  error: null,
};

// REDUCER
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_MOVIE:
      return { ...state, loadingMovie: true, error: false };
    case LOADING_MOVIES:
      return { ...state, loadingMovies: true, error: false };
    case GET_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, loadingMovies: false };
    case GET_MOVIE_SUCCESS:
      return { ...state, movie: action.payload, loadingMovie: false };

    case GET_MOVIES_FAIL:
    case GET_MOVIE_FAIL:
      return {
        ...state,
        error: action.payload,
        loadingMovie: false,
        loadingMovies: false,
      };

    default:
      return state;
  }
};

// Api Functions
export const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_MOVIES });
      const { data: movies } = await axios.get(`/movies`);
      dispatch({
        type: GET_MOVIES_SUCCESS,
        payload: movies.results,
      });
    } catch (error) {
      dispatch({
        type: GET_MOVIES_FAIL,
        payload: error,
      });
    }
  };
};

export const getMovie = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_MOVIE });
      const { data: movie } = await axios.get(`/movies/details/${id}`);
      const { data: video } = await axios.get(`/movies/video/${id}`);
      const { data: reviews } = await axios.get(`/movies/reviews/${id}`);
      dispatch({
        type: GET_MOVIE_SUCCESS,
        payload: { ...movie, video, reviews },
      });
    } catch (error) {
      dispatch({ type: GET_MOVIE_FAIL, payload: error });
    }
  };
};

export const searchMovies = (query) => {
  return async (dispatch) => {
    try {
      const { data: movies } = await axios.get(`/movies/search/${query}`);

      dispatch({
        type: GET_MOVIES_SUCCESS,
        payload: movies.results,
      });
    } catch (error) {
      dispatch({ type: GET_MOVIES_FAIL, payload: error });
    }
  };
};

export default reducer;
