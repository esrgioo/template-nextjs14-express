import { NextFunction, Request, Response } from 'express';
import { registerService } from '@/services/auth/register.service';

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerService(req.body);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
