export interface Movie {
  id: string;
  title: string;
  director: string;
  year: number | null;
  genre: string[];
  synopsis: string;
  thumbnailUrl: string;
}
