import { Movie } from '../types';
import { ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE, SET_PAGE, Action } from '.';

interface State {
  movies: Movie[];
  currentPage: number;
  moviesPerPage: number;
}

export const initialState: State = {
  movies: [
    {
      "id": "b342510e-17e2-4ef9-bf47-9f22d7b23a98",
      "title": "Inception",
      "director": "Christopher Nolan",
      "year": 2010,
      "genre": ["Action", "Adventure", "Sci-Fi"],
      "synopsis": "A thief who enters the dreams of others to steal secrets from their subconscious.",
      "thumbnailUrl": "https://m.media-amazon.com/images/I/912AErFSBHL._AC_SL1500_.jpg"
    },

    {
      "id": "89f156d6-7c0e-4e59-b405-3c1d4e8e4b4a",
      "title": "The Dark Knight",
      "director": "Christopher Nolan",
      "year": 2008,
      "genre": ["Action", "Crime", "Drama"],
      "synopsis": "Batman faces off against the Joker, a sadistic criminal mastermind.",
      "thumbnailUrl": ""
    },
    {
      "id": "cde4d170-1a89-4b0f-909e-1e41bb0e9d4f",
      "title": "The Shawshank Redemption",
      "director": "Frank Darabont",
      "year": 1994,
      "genre": ["Drama"],
      "synopsis": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "thumbnailUrl": ""
    },
    {
      "id": "f4a03d5c-2d0a-4f34-80a7-9ec5fbd7a49e",
      "title": "Pulp Fiction",
      "director": "Quentin Tarantino",
      "year": 1994,
      "genre": ["Crime", "Drama"],
      "synopsis": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "thumbnailUrl": ""
    },
    {
      "id": "6c9edccb-1b7e-4c74-9a84-65281bc6f41e",
      "title": "The Godfather",
      "director": "Francis Ford Coppola",
      "year": 1972,
      "genre": ["Crime", "Drama"],
      "synopsis": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "thumbnailUrl": ""
    },
    {
      "id": "da0c9b8b-2f5e-4863-bc92-2028c6a31e28",
      "title": "Fight Club",
      "director": "David Fincher",
      "year": 1999,
      "genre": ["Drama"],
      "synopsis": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      "thumbnailUrl": ""
    },
    {
      "id": "d7f07519-15a6-4c60-8a85-0bc2cb2bb157",
      "title": "Forrest Gump",
      "director": "Robert Zemeckis",
      "year": 1994,
      "genre": ["Drama", "Romance"],
      "synopsis": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
      "thumbnailUrl": ""
    },
    {
      "id": "9e6f3e15-64c5-40ea-9682-908ca18e8f7d",
      "title": "The Matrix",
      "director": "The Wachowskis",
      "year": 1999,
      "genre": ["Action", "Sci-Fi"],
      "synopsis": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      "thumbnailUrl": "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg"
    },
    {
      "id": "ebae8dbb-01f7-4f41-88b8-24e9b902f2c1",
      "title": "Interstellar",
      "director": "Christopher Nolan",
      "year": 2014,
      "genre": ["Adventure", "Drama", "Sci-Fi"],
      "synopsis": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "thumbnailUrl": ""
    },
    {
      "id": "f4b93d4b-d170-4d0b-9f72-4e9f26a93f0e",
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "director": "Peter Jackson",
      "year": 2001,
      "genre": ["Adventure", "Drama", "Fantasy"],
      "synopsis": "A meek Hobbit and eight companions set out on a journey to destroy the One Ring and the Dark Lord Sauron.",
      "thumbnailUrl": ""
    },
    {
      "id": "26ae768a-8b54-4b0c-a1f9-540d175b3a57",
      "title": "Star Wars: Episode IV - A New Hope",
      "director": "George Lucas",
      "year": 1977,
      "genre": ["Action", "Adventure", "Fantasy"],
      "synopsis": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station.",
      "thumbnailUrl": ""
    }
  ],
  currentPage: 1,
  moviesPerPage: 5,
};

export const movieReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id ? action.payload : movie,
        ),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    case SET_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
