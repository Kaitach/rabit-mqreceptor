import { Module } from '@nestjs/common';
import { MessagingController } from './app.controller';
import { MessagingService } from './app.service';
import { RabbitExampleModule } from './rabbitmq.module';

@Module({
  imports: [RabbitExampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
