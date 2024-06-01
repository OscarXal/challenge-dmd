import { useCallback, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

import { ADD_MOVIE, DELETE_MOVIE, initialState, movieReducer, SET_PAGE } from "../api";
import { Movie } from "../types";

export const useDispatcherMovie = () => {
    const [moviesState, dispatch] = useReducer(movieReducer, initialState);

    const saveMovie = useCallback((newMovie: Movie) => {
        dispatch({ type: ADD_MOVIE, payload: { ...newMovie, id: uuidv4() } });
     }, []);

    const deleteMovie = useCallback((id: string) => {
        dispatch({ type: DELETE_MOVIE, payload: id });
    }, []);

    const pageChange = useCallback((page: number) => {
        dispatch({ type: SET_PAGE, payload: page });
    }, []);

    return { moviesState, saveMovie, deleteMovie, pageChange };
}