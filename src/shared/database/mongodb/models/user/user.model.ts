import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { randomUUID } from "crypto";

@Schema({
  collection: 'users',
  timestamps: true
})
export class UserModel {
  @Prop({
    type: String,
    default: () => randomUUID()
  })
  _id!: string;

  @Prop({
    type: Date,
  })
  createdAt: Date;

  @Prop({
    type: Date,
  })
  updatedAt: Date;

  @Prop({
    type: String,
    required: true
  })
  name: string;

  @Prop({
    type: String,
    required: true
  })
  email: string;
  
  @Prop({
    type: String,
    required: true
  })
  password: string;
  
  @Prop({
    type: String,
  })
  nickname: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel)