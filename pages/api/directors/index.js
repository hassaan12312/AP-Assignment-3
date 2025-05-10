// pages/api/directors/index.js
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  
  // Fetch the first document from the "DB" collection
  const data = await db.collection('DB').findOne({});
  
  if (!data || !data.directors) {
    return res.status(404).json({ message: 'Directors not found' });
  }

  res.status(200).json(data.directors);  // Return the list of directors
}
