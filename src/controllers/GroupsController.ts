import { Request, Response } from 'express';
import { getModelForClass } from '@typegoose/typegoose';
import { v4 as uuidv4 } from 'uuid';

import GroupSchema from '../schemas/Group';

const Group = getModelForClass(GroupSchema);

class GroupController {
  async index(request: Request, response: Response): Promise<Response> {
    const groups = await Group.find();

    return response.send(groups);
  }

  async store(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const group = await Group.create({
      _id: uuidv4(),
      name,
    });

    return response.send(group);
  }
}

export default new GroupController();
