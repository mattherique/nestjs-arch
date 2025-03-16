import { InjectModel } from "@nestjs/mongoose";
import { UserRepositoryInterface } from "src/users/infrastructure/user-repository.interface";
import { User } from "src/users/user.entity";
import { UserModel } from "../models/user/user.model";
import { Model } from "mongoose";

export class MongodbUserRepository implements UserRepositoryInterface {
  constructor(
    @InjectModel(UserModel.name) 
    private readonly userCollection: Model<UserModel>
  ) {}

  async find(): Promise<UserModel[]> {
    return await this.userCollection.find({}, {__v: false})
  }

  async findById(id: string): Promise<UserModel | null> {
    return await this.userCollection.findOne({__id: { $eq: id } })
  }

  async findByEmail(email: string): Promise<UserModel | null> {
    return await this.userCollection.findOne({email: email })
  }

  async create(data: User): Promise<UserModel> {
    return await this.userCollection.create(data)
  }

  async update(id: string, dataUpdate: User): Promise<UserModel | null> {
    return await this.userCollection.findOneAndUpdate({
      __id: { $eq: id },
      $set: dataUpdate,
      new: true 
    })
  }

  async delete(id: string): Promise<void> {
    await this.userCollection.deleteOne({__id: { $eq: id } })
  }
}