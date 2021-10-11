
import express from 'express';
import controller from '../controllers/user.controller';
const router = express.Router();

// for testing 
router.get('/', controller.getUser);

router.post('/', controller.getToken);

export = router;