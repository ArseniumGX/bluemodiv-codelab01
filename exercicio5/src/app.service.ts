import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Exercício 5 - Maior de 3 números';
  }

  getMaior(numero1: number, numero2: number, numero3: number): string{
    return numero1 > numero2 && numero1 > numero3 ? `${numero1} é o maior` 
      : numero2 > numero1 && numero2 > numero3 ? `${numero2} é o maior`
      : numero3 > numero1 && numero3 > numero2 ? `${numero3} é o maior`
      : 'Não há um maior, pelo menos 2 números são iguais.'
  }
}
