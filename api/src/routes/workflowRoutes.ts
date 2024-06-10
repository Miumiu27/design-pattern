import { Router } from 'express';
import WorkflowController from '../controllers/workflow/workflowController';

const router = Router();
const controller = new WorkflowController();

router.get('/workflows', controller.getAll.bind(controller));
router.get('/workflows/:id', controller.getById.bind(controller));
router.post('/workflows', controller.create.bind(controller));
router.put('/workflows/:id', controller.update.bind(controller));
router.delete('/workflows/:id', controller.delete.bind(controller));
router.post('/workflows/process', controller.processWorkflow.bind(controller));

export default router;
