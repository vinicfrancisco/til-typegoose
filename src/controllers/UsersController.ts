import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
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
      _id: uuidv4(),
      name,
      groups,
    });

    return response.send(user);
  }
}

export default new UsersController();
