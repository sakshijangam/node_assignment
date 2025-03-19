import express from 'express';
import { getUserCollection } from '../models/userModels';
import { fetchData } from '../utils/apiClient';

const router = express.Router();

// Load 10 users into DB
router.get('/load', async (req, res) => {
  try {
    const users = await fetchData('https://jsonplaceholder.typicode.com/users');
    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
    const comments = await fetchData('https://jsonplaceholder.typicode.com/comments');

    const userCollection = await getUserCollection();
    await userCollection.insertMany(users);

    res.status(200).send();
  } catch (error) {
    res.status(500).send('Error loading data');
  }
});

// Delete all users
router.delete('/', async (req, res) => {
  try {
    const userCollection = await getUserCollection();
    await userCollection.deleteMany({});
    res.status(200).send();
  } catch (error) {
    res.status(500).send('Error deleting users');
  }
});

// Delete a specific user
router.delete('/:userId', async (req, res) => {
  try {
    const userCollection = await getUserCollection();
    const result = await userCollection.deleteOne({ id: parseInt(req.params.userId) });
    if (result.deletedCount === 0) {
      return res.status(404).send('User not found');
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).send('Error deleting user');
  }
});

// Get a specific user
router.get('/:userId', async (req, res) => {
  try {
    const userCollection = await getUserCollection();
    const user = await userCollection.findOne({ id: parseInt(req.params.userId) });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send('Error fetching user');
  }
});

// Add a new user
router.put('/', async (req, res) => {
  try {
    const userCollection = await getUserCollection();
    const existingUser = await userCollection.findOne({ id: req.body.id });
    if (existingUser) {
      return res.status(409).send('User already exists');
    }
    await userCollection.insertOne(req.body);
    res.status(201).send();
  } catch (error) {
    res.status(500).send('Error adding user');
  }
});

export default router;