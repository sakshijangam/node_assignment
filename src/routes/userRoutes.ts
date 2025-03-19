import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

// Use the router from userController
router.use('/users', userController);

export default router;