// components/MovieCard.js
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import Link from 'next/link';

export default function MovieCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardActionArea component={Link} href={`/movies/${movie.id}`}>
        <CardContent>
          <Typography variant="h6">{movie.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {movie.rating} | Year: {movie.releaseYear}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
