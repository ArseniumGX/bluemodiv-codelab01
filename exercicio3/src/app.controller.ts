import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('celsius-fahrenheit')
  getCelToFah(): string{
    return this.appService.getCelsiusToFahrenheit(32)
  }

  @Get('celsius-kelvin')
  getCelToKel(): string{
    return this.appService.getCelsiusToKelvin(0)
  }

  @Get('fahrenheit-kelvin')
  getFahToKel(): string{
    return this.appService.getFahrenheitToKelvin(32)
  }
}
