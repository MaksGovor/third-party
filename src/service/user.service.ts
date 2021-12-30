import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserRequest } from 'src/interface/apiRequest';
import { User } from 'src/model/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  public async addUser(user: RegisterUserRequest): Promise<User> {
    const newUser = new this.userModel(user);
    const res = await newUser.save();
    return res;
  }

  public async listUsers(): Promise<Array<User>> {
    const users = await this.userModel.find().exec();
    return users;
  }
}
