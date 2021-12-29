import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from 'src/controller/app.controller';
import { AppService } from 'src/service/app.service';
import configuration from 'src/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      cache: true,
    }),
    MongooseModule.forRoot(configuration().mongodb.connectionUrl),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
