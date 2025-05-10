mport { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  
  // Fetch the first document from the "DB" collection, assuming it contains all data
  const data = await db.collection('DB').findOne({});
  
  if (!data || !data.movies) {
    return res.status(404).json({ message: 'Movies not found' });
  }

  res.status(200).json(data.movies);
}
