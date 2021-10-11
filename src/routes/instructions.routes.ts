
import express from 'express';
import controller from '../controllers/instructions.controller';
const router = express.Router();

// for testing 
router.get('/ping', controller.getPong);

// getting Article 
router.get('/instruction/:articleName', controller.getArticle);

export = router;