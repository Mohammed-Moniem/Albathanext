import { combineReducers } from "redux";
import Movies from "./Movies";

const reducers = {
  movies: Movies,
};

export default combineReducers(reducers);
