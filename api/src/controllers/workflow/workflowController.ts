import { Request, Response } from 'express';
import WorkflowModel from '../../models/workflow/WorflowModel';
import WorkflowProcess from './workflowProcess';

class WorkflowController {
  private model = new WorkflowModel();

  async getAll(req: Request, res: Response) {
    try {
      const workflows = await this.model.getAll();
      res.json(workflows);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching workflows' });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const workflow = await this.model.getById(parseInt(id, 10));
      if (workflow) {
        res.json(workflow);
      } else {
        res.status(404).json({ error: 'Workflow not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching workflow' });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const newWorkflow = req.body;
      const id = await this.model.create(newWorkflow);
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: 'Error creating workflow' });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedWorkflow = req.body;
      const success = await this.model.update(parseInt(id, 10), updatedWorkflow);
      if (success) {
        res.json({ message: 'Workflow updated' });
      } else {
        res.status(404).json({ error: 'Workflow not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error updating workflow' });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const success = await this.model.delete(parseInt(id, 10));
      if (success) {
        res.json({ message: 'Workflow deleted' });
      } else {
        res.status(404).json({ error: 'Workflow not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error deleting workflow' });
    }
  }
  async processWorkflow(req: Request, res: Response) {
    const process = new WorkflowProcess();
    process.process();
    res.json({ message: 'Workflow processed' });
  }
}

export default WorkflowController;
