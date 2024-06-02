import { Request, Response } from 'express';

export interface ContentStrategy {
  createContent(req: Request, res: Response): Promise<void>;
}
