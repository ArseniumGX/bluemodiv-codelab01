import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Exercício 2 - Ordenação de array';
  }

  getSortCresc(array: number[]): number[]{
    return array.sort();
  }

  getSortDecres(array: number[]): number[]{
    return array.sort().reverse()
  }
}
