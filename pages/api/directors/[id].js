// pages/api/directors/[id].js
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { id } = req.query;
  const { db } = await connectToDatabase();
  
  // Fetch the first document from the "DB" collection
  const data = await db.collection('DB').findOne({});
  
  if (!data || !data.directors) {
    return res.status(404).json({ message: 'Director not found' });
  }

  // Find the director with the specific id
  const director = data.directors.find(d => d.id === id);

  if (!director) {
    return res.status(404).json({ message: 'Director not found' });
  }

  // Find all movies directed by this director
  const moviesByDirector = data.movies.filter(m => m.directorId === id);

  res.status(200).json({ director, movies: moviesByDirector });  // Return director details and their movies
}
