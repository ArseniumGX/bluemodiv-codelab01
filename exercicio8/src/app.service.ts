import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMaior(numero1: number, numero2: number, numero3: number): string{
    return numero1 > numero2 && numero1 > numero3 ? `${numero1} é maior!`
      : numero2 > numero1 && numero2 > numero3 ? `${numero2} é maior!`
      : numero3 > numero1 && numero3 > numero2 ? `${numero3} é maior!`
      : 'Há ao menos dois números maiores iguais'
  }
}
