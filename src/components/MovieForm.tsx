import { FormEvent, useCallback, useState } from "react";

import { MovieFormContainer } from ".";
import { Movie } from "../types";
import { Button } from "../AppStyles";

interface IProps {
  handleSaveMovie: (newMovie: Movie) => void;
}

export const MovieForm: React.FC<IProps> = ({ handleSaveMovie }) => {
  const [newMovie, setNewMovie] = useState<Movie>({
    id: "",
    title: "",
    director: "",
    year: null,
    genre: [],
    synopsis: "",
    thumbnailUrl: "",
  });

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleSaveMovie(newMovie);
      setNewMovie({
        id: "",
        title: "",
        director: "",
        year: null,
        genre: [],
        synopsis: "",
        thumbnailUrl: "",
      });
    },
    [handleSaveMovie, newMovie]
  );

  return (
    <MovieFormContainer onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Director"
        value={newMovie.director}
        onChange={(e) => setNewMovie({ ...newMovie, director: e.target.value })}
      />
      <input
        type="number"
        placeholder="Year"
        value={newMovie.year || undefined}
        onChange={(e) =>
          setNewMovie({ ...newMovie, year: parseInt(e.target.value) })
        }
      />
      <input
        type="text"
        placeholder="Genre"
        value={newMovie.genre.join(", ")}
        onChange={(e) =>
          setNewMovie({ ...newMovie, genre: e.target.value.split(", ") })
        }
      />
      <textarea
        placeholder="Synopsis"
        value={newMovie.synopsis}
        onChange={(e) => setNewMovie({ ...newMovie, synopsis: e.target.value })}
      />
      <input
        type="text"
        placeholder="Thumbnail URL"
        value={newMovie.thumbnailUrl}
        onChange={(e) =>
          setNewMovie({ ...newMovie, thumbnailUrl: e.target.value })
        }
      />
      <Button type="submit">Add Movie</Button>
    </MovieFormContainer>
  );
};
