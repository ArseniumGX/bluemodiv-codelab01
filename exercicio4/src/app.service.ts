import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Exercício 4 - Média de notas';
  }

  getResultado(nota1: number, nota2: number, nota3: number): string{
    const media = +((nota1 + nota2 + nota3) / 3).toFixed(1)
    return media >= 7 ? `Média ${media} Aprovado!` : media >= 6 ? `Média ${media} Recuperação!` : `Média ${media} Reprovado!`
  }
}
