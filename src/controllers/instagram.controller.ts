import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import userService from '@services/users.service';

class InstagramController {
  public init = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      res.status(200).json({ message: 'init' });
    } catch (error) {
      next(error);
    }
  };
}

export default InstagramController;
