import React, { useCallback, useMemo } from "react";

import {
  Button,
  Container,
  MovieItem,
  MovieItemContent,
  MovieList,
  PageButton,
  Pagination,
} from "./AppStyles";
import { MovieForm } from "./components";
import { useDispatcherMovie } from "./hooks";
import { Movie } from "./types";
import NotAvailable from "./assets/images/not-available-image.jpg";

const App: React.FC = () => {
  const { moviesState, saveMovie, deleteMovie, pageChange } =
    useDispatcherMovie();

  const handleSaveMovie = useCallback(
    (newMovie: Movie) => {
      saveMovie(newMovie);
    },
    [saveMovie]
  );

  const { movies, currentPage, moviesPerPage } = moviesState;

  const currentMovies = useMemo(() => {
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    return movies.slice(indexOfFirstMovie, indexOfLastMovie);
  }, [currentPage, movies, moviesPerPage]);

  return (
    <Container>
      <h1>Movies</h1>
      <MovieForm handleSaveMovie={handleSaveMovie} />
      <MovieList>
        {currentMovies.map((movie: Movie) => (
          <MovieItem key={movie.id}>
            <MovieItemContent>
              <div>
                <h3>{movie.title}</h3>
                <p>{movie.director}</p>
                <p>{movie.year}</p>
                <p>{movie.genre.join(", ")}</p>
                <p>{movie.synopsis}</p>
              </div>
              <div>
                <img
                  src={movie.thumbnailUrl || NotAvailable}
                  alt={movie.title}
                  width="100"
                />
              </div>
            </MovieItemContent>
            <Button onClick={() => deleteMovie(movie.id)}>Delete</Button>
          </MovieItem>
        ))}
      </MovieList>
      <Pagination>
        {Array.from(
          { length: Math.ceil(movies.length / moviesPerPage) },
          (_, i) => (
            <PageButton
              key={i}
              onClick={() => pageChange(i + 1)}
              isCurrent={currentPage === i + 1}
            >
              {i + 1}
            </PageButton>
          )
        )}
      </Pagination>
    </Container>
  );
};

export default App;
