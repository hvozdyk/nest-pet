import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsController } from './controllers/cats/cats.controller';
import { CatsService } from './controllers/cats/cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
