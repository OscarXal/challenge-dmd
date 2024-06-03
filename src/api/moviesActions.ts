import { Movie } from "../types";

export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const SET_PAGE = 'SET_PAGE';

export type Action =
    | { type: typeof ADD_MOVIE; payload: Movie }
    | { type: typeof EDIT_MOVIE; payload: Movie }
    | { type: typeof DELETE_MOVIE; payload: string }
    | { type: typeof SET_PAGE; payload: number };