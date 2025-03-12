import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users: any = [];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  create(user) {
    this.users.push(user);
  }

  update(id: number, user) {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  remove(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
