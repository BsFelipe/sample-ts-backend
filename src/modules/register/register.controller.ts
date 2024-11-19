import { Request, Response, NextFunction } from 'express';
import CustomError from '../../utils/customError';
import RegisterService from './register.service';

class RegisterController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name , cpf, email } = req.body;
      console.log(cpf, name, email)
      if(!cpf) {
        throw new CustomError('invalidBodyRequest', 400);
      }
      const result = await RegisterService.create(name, cpf, email);
      return res.status(200).send(result)
    } catch (error) {
      next(error);
      return;
    }
  }
}

export default new RegisterController();
