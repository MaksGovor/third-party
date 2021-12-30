import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from 'src/controller/app.controller';
import { AppService } from 'src/service/app.service';
import configuration from 'src/config/configuration';
import { UserModule } from './user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: ['.env'],
      isGlobal: true,
      cache: true,
    }),
    MongooseModule.forRoot(configuration().mongodb.connectionUrl),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
