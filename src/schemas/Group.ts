import { prop, modelOptions } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';

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
class Group extends Base<string> {
  @prop()
  public _id: string;

  @prop()
  public name: string;
}

export default Group;
