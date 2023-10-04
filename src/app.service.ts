import { RabbitSubscribe } from '@nestjs-plus/rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagingService {



  @RabbitSubscribe({
    exchange: 'exchangeDirect',
    routingKey: 'direct.rabbit',
    queue: 'directRabbit',
  })
  subDirect(dto: string): void {
    console.log(`Mensaje recibido:  direct ${JSON.stringify(dto)}`);
  }

  @RabbitSubscribe({
    exchange: 'exchangeDirect',
    routingKey: 'direct.',
    queue: 'directRabbit2',
  })
  subDirectDos(dto: string): void {
    console.log(`Mensaje recibido: direct ${JSON.stringify(dto)}`);
  }

  @RabbitSubscribe({
    exchange: 'exchangeTopic',
    routingKey: 'topic.rioooo',
    queue: 'rabbit.rabbitTwo',
    
  })
  subTopicOne(dto: string): void {
    console.log(`Mensaje recibido: 'topic + ${JSON.stringify(dto)}`);
  }

  @RabbitSubscribe({
    exchange: 'exchangeTopic',
    routingKey: 'topic.rre',
    queue: 'topic.rabbitOne',
  })
  subTopicTwo(dto: string): void {
    console.log(`Mensaje recibido: 'topic`);
  }

  @RabbitSubscribe({
    exchange: 'fanOut1',
    routingKey: '',
    queue: 'fanout',
  })
  subFanOut(dto: string): void {
    console.log(`Mensaje recibido 'desde fan out `);
  }
  @RabbitSubscribe({
    exchange: 'fanOut1',
    routingKey: '',
    queue: 'fanout',
  })
  subFanOut1(dto: string): void {
    console.log(`Mensaje recibido 'desde fan out2 `);
  }
  @RabbitSubscribe({
    exchange: 'fanOut1',
    routingKey: '',
    queue: 'fanout',
  })
  subFanOu2t(dto: string): void {
    console.log(`Mensaje recibido 'desde fan out3 `);
  }
}
