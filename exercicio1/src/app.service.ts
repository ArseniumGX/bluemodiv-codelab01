import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá world!';
  }

  getSoma(numero1: number, numero2: number = 0): number{
    return numero1 + numero2;
  }

  getSubtr(numero1: number, numero2: number = 0): number{
    return numero1 - numero2;
  }

  getMultipl(numero1: number, numero2: number = 1): number{
    return numero1 * numero2;
  }

  getDivi(numero1: number, numero2: number = 1): number | string{
    return numero2 === 0 ? 'Divisão por zero, resultado indeterminado.' : numero1 / numero2;
  }

  getPotencia(base: number, expoente: number = 1): number{
    return base ** expoente; // sei que pode ser Math.pow(base, expoente)
  }

  getRaiz(numero: number): number{
    return numero ** (1 / 2); // sei que pode ser Math.sqrt(numero)
  }

  getSeno(numero: number): number{
    return Math.sin(numero);
  }

  getCosseno(numero: number): number{
    return Math.cos(numero);
  }

  getTangente(numero: number): number{
    return Math.tan(numero);
  }
}
