import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'admin',
      password: 'admin',
      role: 'admin',
    },
    {
      userId: 2,
      username: 'moderator',
      password: 'moderator',
      role: 'moderator',
    },
    {
      userId: 3,
      username: 'regular',
      password: 'regular',
      role: 'regular',
    },
  ];

    async findOne(username: string): Promise<User | undefined> {
      return this.users.find(user => user.username === username);
    }
}