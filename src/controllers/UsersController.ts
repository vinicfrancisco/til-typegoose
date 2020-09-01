import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';

import UserSchema from '../schemas/User';

const User = getModelForClass(UserSchema);

class UsersController {
  async index(request: Request, response: Response): Promise<Response> {
    const users = await User.find().populate('groups');

    return response.send(users);
  }

  async store(request: Request, response: Response): Promise<Response> {
    const { name, groups } = request.body;

    const user = await User.create({
      name,
      groups,
    });

    return response.send(user);
  }
}

export default new UsersController();
