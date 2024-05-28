import { Router } from 'express';
import { createUser , deleteUser ,getAllUsers } from '../controllers/user/userController';
import upload from '../configs/multerConfig';

const router = Router();

router.post('/users', upload.single('profile_image'), createUser);
router.delete('/users/:user_id', deleteUser);
router.get('/users', getAllUsers);

export default router;
