import { prop, Ref, modelOptions } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';

import Group from './Group';

@modelOptions({
  schemaOptions: {
    _id: false,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;

        delete ret._id;
        delete ret.__v;
      },
    },
  },
})
class User extends Base<string> {
  @prop()
  public _id: string;

  @prop()
  public name: string;

  @prop({ ref: Group, refType: String })
  public groups: Ref<Group>[];
}

export default User;
