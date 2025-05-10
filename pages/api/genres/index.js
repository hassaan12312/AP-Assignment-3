import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  
  // Fetch the first document from the "DB" collection
  const data = await db.collection('DB').findOne({});
  
  if (!data || !data.genres) {
    return res.status(404).json({ message: 'Genres not found' });
  }

  res.status(200).json(data.genres);  // Return the list of genres
}
