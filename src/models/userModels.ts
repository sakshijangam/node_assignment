import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/node_assignment';
const client = new MongoClient(MONGO_URI);

export const getUserCollection = async () => {
  await client.connect();
  return client.db().collection('users');
};