import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Exercício 6 - Par ou Ímpar';
  }

  getParOuImpar(numero: number): string{
    return numero >= 0 && numero % 2 === 0 ? `Número ${numero} é par e positivo.`
      : numero >= 0 && numero % 2 !== 0 ? `Número ${numero} é ímpar e positivo.`
      : numero < 0 && numero % 2 === 0 ? `Número ${numero} é par e negativo`
      : `Número ${numero} é ímpar e negativo`
  }
}
