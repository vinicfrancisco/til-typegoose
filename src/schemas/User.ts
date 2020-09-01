import { arrayProp, prop, Ref } from '@typegoose/typegoose';

import Group from './Group';

class User {
  @prop()
  public name: string;

  @arrayProp({ ref: Group })
  public groups: Ref<Group>[];
}

export default User;
