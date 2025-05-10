import MovieCard from '@/components/MovieCard';
import { LoadData } from '../data';
import { Grid, Button } from '@mui/material';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const data = await LoadData();
  return { props: data };
}

export default function Movies({ movies }) {
  const router = useRouter();

  return (
    <div>
      <h1>All Movies</h1>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" onClick={() => router.push('/genres')}>
        Filter by Genre
      </Button>
    </div>
  );
}
