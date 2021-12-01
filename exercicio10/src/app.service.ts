import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Exercício 10 - Idade em dias';
  }

  getIdade(yy: number, mm: number, dd: number): string{
    const idade = (yy * 365) + (mm * 30) + dd
    return `${idade} dias de idade.`
  }
}
