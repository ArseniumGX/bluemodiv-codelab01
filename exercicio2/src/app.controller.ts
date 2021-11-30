import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cresc')
  getCesc(): number[]{
    return this.appService.getSortCresc([2,5,6,1,4,3,9])
  }

  @Get('decresc')
  getDecres(): number[]{
    return this.appService.getSortDecres([2,5,6,1,4,3,9])
  }
}
