import express from 'express';
const router = express.Router();
import registerUser from '../controllers/userControllers.js';

router.post('/', registerUser);
// router.post('/login', authUser);

export default router;
