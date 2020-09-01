import { prop } from '@typegoose/typegoose';

class Group {
  @prop()
  public name: string;
}

export default Group;
