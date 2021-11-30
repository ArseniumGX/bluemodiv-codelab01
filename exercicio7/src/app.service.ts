import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Exercício 7 - Teste idade';
  }

  getIdade(idade: number): string{
    return idade >= 5 && idade <= 7 ? 'Infantil A'
      : idade >= 8 && idade <= 10 ? 'Infantil B'
      : idade >= 11 && idade <=13 ? 'Juvenil A'
      : idade >= 14 && idade <= 17 ? 'Juvenil B'
      : idade > 17 ? 'Adulto'
      : 'Idade fora não pode ser categorizada.'
  }
}
