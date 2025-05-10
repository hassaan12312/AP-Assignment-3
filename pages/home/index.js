import MovieCard from '@/components/MovieCard';
import { LoadData } from '../data';
import { Grid, Button } from '@mui/material';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const data = await LoadData();
  const topRated = data.movies.filter((m) => m.rating > 8.0);
  return { props: { top_movies: topRated }, revalidate: 60 };
}

export default function HomePage({ top_movies }) {
  const router = useRouter();

  return (
    <div>
      <h1>Top Rated Movies:</h1>
      <Grid container spacing={2}>
        {top_movies.map((movie) => (
          <Grid item key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" onClick={() => router.push('/genres')}>
        Browse Genres
      </Button>
    </div>
  );
}
