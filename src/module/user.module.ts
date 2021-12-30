import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/controller/user.controller';
import { UserFormatter } from 'src/formatter/user.formatter';
import { UserSchema } from 'src/model/user.model';
import { UserService } from 'src/service/user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService, UserFormatter],
})
export class UserModule {}
