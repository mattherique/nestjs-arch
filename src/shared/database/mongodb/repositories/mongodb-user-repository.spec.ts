import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { MongodbUserRepository } from './mongodb-user-repository';
import { UserModel } from '../models/user/user.model';
import { Model } from 'mongoose';

const mockUserModel = {
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  findOneAndUpdate: jest.fn(),
  deleteOne: jest.fn(),
};

describe('MongodbUserRepository', () => {
  let repository: MongodbUserRepository;
  let model: Model<UserModel>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MongodbUserRepository,
        {
          provide: getModelToken(UserModel.name),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    repository = module.get<MongodbUserRepository>(MongodbUserRepository);
    model = module.get<Model<UserModel>>(getModelToken(UserModel.name));
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should find all users', async () => {
    const users = [{ email: 'test@example.com' }];
    mockUserModel.find.mockResolvedValue(users);
    const result = await repository.find();
    expect(result).toEqual(users);
    expect(mockUserModel.find).toHaveBeenCalledWith({}, { __v: false });
  });

  it('should find user by id', async () => {
    const user = { email: 'test@example.com' };
    mockUserModel.findOne.mockResolvedValue(user);
    const result = await repository.findById('1');
    expect(result).toEqual(user);
    expect(mockUserModel.findOne).toHaveBeenCalledWith({ __id: { $eq: '1' } });
  });

  it('should find user by email', async () => {
    const user = { email: 'test@example.com' };
    mockUserModel.findOne.mockResolvedValue(user);
    const result = await repository.findByEmail('test@example.com');
    expect(result).toEqual(user);
    expect(mockUserModel.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
  });

  it('should create a new user', async () => {
    const user = { email: 'test@example.com' };
    mockUserModel.create.mockResolvedValue(user);
    const result = await repository.create(user as any);
    expect(result).toEqual(user);
    expect(mockUserModel.create).toHaveBeenCalledWith(user);
  });

  it('should update a user', async () => {
    const user = { email: 'updated@example.com' };
    mockUserModel.findOneAndUpdate.mockResolvedValue(user);
    const result = await repository.update('1', user as any);
    expect(result).toEqual(user);
    expect(mockUserModel.findOneAndUpdate).toHaveBeenCalledWith(
      { __id: { $eq: '1' }, $set: user, new: true }
    );
  });

  it('should delete a user', async () => {
    mockUserModel.deleteOne.mockResolvedValue({ deletedCount: 1 });
    await repository.delete('1');
    expect(mockUserModel.deleteOne).toHaveBeenCalledWith({ __id: { $eq: '1' } });
  });
});