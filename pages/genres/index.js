import MovieCard from '@/components/MovieCard';
import { LoadData } from '../data';
import { Grid } from '@mui/material';

export async function getServerSideProps({ query }) {
  const data = await LoadData();
  const selectedGenreId = query.genre;
  const selectedGenre = data.genres.find((g) => g.id === selectedGenreId);
  const filteredMovies = selectedGenreId
    ? data.movies.filter((m) => m.genreId === selectedGenreId)
    : data.movies;

  return {
    props: {
      genres: data.genres,
      filteredMovies,
      selectedGenre: selectedGenre ? selectedGenre.name : null,
    },
  };
}

export default function GenresPage({ genres, filteredMovies, selectedGenre }) {
  return (
    <div>
      <h1>Genres</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <a href={`/genres?genre=${genre.id}`}>{genre.name}</a>
          </li>
        ))}
      </ul>

      <h2>{selectedGenre ? `Movies in ${selectedGenre}` : 'All Movies'}</h2>
      <Grid container spacing={2}>
        {filteredMovies.map((movie) => (
          <Grid item key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
