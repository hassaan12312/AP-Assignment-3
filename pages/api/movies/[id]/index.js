// pages/api/movies/[id].js
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { id } = req.query;
  const { db } = await connectToDatabase();
  
  // Fetch the first document from the "DB" collection
  const data = await db.collection('DB').findOne({});
  
  if (!data || !data.movies) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  // Find the movie with the specific id
  const movie = data.movies.find(m => m.id === id);

  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  res.status(200).json(movie);
}
