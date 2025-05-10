// pages/api/genres/[id]/movies.js
import { connectToDatabase } from '../../../../lib/mongodb';

export default async function handler(req, res) {
  const { id } = req.query;
  const { db } = await connectToDatabase();
  
  // Fetch the first document from the "DB" collection
  const data = await db.collection('DB').findOne({});
  
  if (!data || !data.genres || !data.movies) {
    return res.status(404).json({ message: 'Data not found' });
  }

  // Find the genre with the specific id
  const genre = data.genres.find(g => g.id === id);

  if (!genre) {
    return res.status(404).json({ message: 'Genre not found' });
  }

  // Filter movies by genreId
  const moviesByGenre = data.movies.filter(m => m.genreId === id);

  res.status(200).json(moviesByGenre);  // Return the filtered movies
}
