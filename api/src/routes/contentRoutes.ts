import { Router } from 'express';
import { getAllContent, deleteContent, getOtherContent , getAllDocument} from '../controllers/content/contentController';
import { createContent } from '../controllers/content/createContentController';
import { downloadFile } from '../controllers/content/downloadFileController'; // Importer le contrôleur
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/contents', upload.single('file'), createContent); 
router.get('/contents', getAllContent); 
router.get('/contents/all-docs', getAllDocument); 
router.get('/contents/other-content', getOtherContent); 
router.delete('/contents/:content_id', deleteContent); 
//router.get('/contents/download/:fileId', downloadFile); 

export default router;
