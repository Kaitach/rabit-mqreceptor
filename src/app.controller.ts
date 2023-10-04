import { Controller, Get } from '@nestjs/common';
import { MessagingService } from './app.service';

@Controller('')
export class MessagingController {
  constructor(private readonly messagingService: MessagingService) {}

}
