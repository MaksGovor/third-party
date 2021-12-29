import { Module } from '@nestjs/common';
import { AppController } from 'src/controller/app.controller';
import { AppService } from 'src/service/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
