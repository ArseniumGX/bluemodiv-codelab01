import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sum')
  getSoma(): number{
    return this.appService.getSoma(2);
  }

  @Get('subtr')
  getSubtr(): number{
    return this.appService.getSubtr(3, 2);
  }

  @Get('mult')
  getMult(): number{
    return this.appService.getMultipl(2, 5);    
  }

  @Get('div')
  getDiv(): number | string{
    return this.appService.getDivi(1, 0)
  }

  @Get('pow')
  getPow(): number{
    return this.appService.getPotencia(5, 2)
  }

  @Get('sqrt')
  getRoot(): number{
    return this.appService.getRaiz(25)
  }

  @Get('sin')
  getSin(): number{
    return this.appService.getSeno(23)
  }
  
  @Get('cos')
  getCos(): number{
    return this.appService.getCosseno(23)
  }

  @Get('tan')
  getTan(): number{
    return this.appService.getTangente(23)
  }
}
