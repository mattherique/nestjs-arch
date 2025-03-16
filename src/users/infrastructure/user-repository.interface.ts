import { UserModel } from "src/shared/database/mongodb/models/user/user.model";
import { User } from "../user.entity";

export interface UserRepositoryInterface {
  find: () => Promise<UserModel[] | null>;
  findById: (id: string) => Promise<UserModel | null>;
  create: (data: User) => Promise<UserModel | null>;
  update: (id: string, dataUpdate: User) => Promise<UserModel | null>;
  delete: (id: string) => Promise<void>;
}