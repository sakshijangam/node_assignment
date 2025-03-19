import express from 'express';
import userRoutes from './controllers/userController';
import { connectToDatabase } from './utils/apiClient';

const app = express();
app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Routes
app.use('/users', userRoutes);

export default app;